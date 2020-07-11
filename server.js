const express = require('express')
const dotenv = require('dotenv')

// Route Files
const bootcamps = require('./routes/bootcamps')

// Load .env variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    API: "running",
    status: res.statusCode,
    data: res.data || null
  })
})

app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT || 5000
// start up server
const run = async () => {
  await app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`))
}

run()