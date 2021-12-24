require('dotenv').config()
const db = require('../db')
const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const authUser = require('../middleware/authUser');

// Get all users: POST "api/auth/getall" with admin password
router.post('/getall', async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const Password = req.header('admin-password');
        if (Password == process.env.ADMIN_PASSWORD) {
            await db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
                if (error) {
                    console.log(error);
                }
                res.status(200).json(results.rows)
            })
        } else {
            res.status(401).json({ errors: 'access denied' });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Delete a users: DELETE "api/auth/deleteacc" with admin password
router.delete('/deleteacc', authUser, async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let userId = req.user.id;
        let user = await db.query('DELETE FROM users WHERE id = $1', [userId])
        if (user.rowCount === 0) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send('Account deleted successfully');
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router