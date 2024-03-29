const express = require('express')
const connectDb = require('./config/db')

const app = express()

// Connect Database
connectDb()

// Init Middleware
app.use(express.json({ extended: false })) // body parser

app.get('/', (req, res) => res.send('API Running'))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/markets', require('./routes/api/market'))
app.use('/api/articles', require('./routes/api/article'))
app.use('/api/profile', require('./routes/api/profile'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
