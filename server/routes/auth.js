require('dotenv').config()
const db = require('../db')
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const authUser = require('../middleware/authUser');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_TOKEN;

// Get user register: POST "api/auth/register"
router.post('/register', [
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('email', 'Enter a valid email').isEmail().normalizeEmail(),
    body('password', 'Password must be atleast 5 characters and max 16 characters').isLength({ min: 5, max: 16 })],
    async (req, res) => {
        let success = false;
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            user = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email])
            if (user.rowCount != 0) {
                return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
            }
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            // Create a new user
            results = await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [req.body.name, req.body.email, secPass])
            Uid = await db.query('SELECT id FROM users WHERE email = $1', [req.body.email])
            const data = {
                user: { id: Uid.rows[0].id }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.status(200).json({ success, authtoken })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })


// Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail().normalizeEmail(),
    body('password', 'Password must be atleast 5 characters and max 16 characters').exists().isLength({ min: 5, max: 16 })
], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        user = await db.query('SELECT * FROM users WHERE email = $1', [req.body.email])
        if (user.rowCount === 0) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        userPassword = await db.query('SELECT password FROM users WHERE email = $1', [email])
        if (userPassword.rowCount === 0) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, userPassword.rows[0].password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }
        userId = await db.query('SELECT id FROM users WHERE email = $1', [email])
        const data = {
            user: {
                id: userId.rows[0].id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.status(200).json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', authUser, async (req, res) => {
    try {
        userId = req.user.id;
        user = await db.query('SELECT name, email FROM users WHERE id = $1', [userId])
        res.status(200).send(user.rows[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router