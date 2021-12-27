const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/status', (_req, res) => {
    res.send('working')
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/user'))

app.use(express.static(path.join(__dirname, '../client/build')))
if (process.env.NODE_ENV === 'production') {
    app.get('*', (_req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })
}

// Start server
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})