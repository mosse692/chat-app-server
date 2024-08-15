const express = require('express')
const app = express() 
const cors = require('cors')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const authRoutes = require('./routes/auth.js')

app.use(cors({
    origins: ["https://chat-app-client-3ihmbwru0-mosse692s-projects.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}))

app.use(express.json())
// app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/auth', cors(), authRoutes)

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))


