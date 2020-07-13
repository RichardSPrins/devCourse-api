const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

// Load .env variables
dotenv.config({ path: './config/config.env' });

// Imports
const connectDB = require('./initializers/db,');

// Route Files
const bootcamps = require('./routes/bootcamps');


const app = express();

// Middleware
app.post('/', (req, res) => {
  res.status(200).json({
    API: "running",
    status: res.statusCode
  })
})

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}


// Mount Routers
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT || 5000
// start up server
const run = async () => {
  await app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`))
}
connectDB()
run()