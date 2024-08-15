const express = require('express')
const app = express() 
const cors = require('cors')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const authRoutes = require('./routes/auth.js')

app.use(cors({
    origin: ["https://chat-app-client-jet.vercel.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json())
// app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/auth', cors(), authRoutes)

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))


