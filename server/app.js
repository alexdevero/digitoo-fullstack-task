// Enable babel transpiler
require('@babel/register')

// Import dependencies
const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')

// Import routes
const apiRoute = require('./routes/api-route')

// Setup app
const PORT = process.env.PORT || '3001'
const app = express()

// Apply middleware
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(helmet())

app.use(express.static(path.join(__dirname, '../build')))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')

    return res.status(200).json({})
  }

  next()
})

app.use('/api', apiRoute)

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../build/index.html'))
// })

app.listen(PORT, () => {
  console.log('Server started on port', PORT)
})
