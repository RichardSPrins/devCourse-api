// @desc      Logs rewuest to Console
const logger = (req, res, next) => {
  console.log( `${req.method} ${res.statusCode} ${req.protocol}://${req.get('host')}${req.originalUrl} \n`)
  next() 
}

module.exports = logger