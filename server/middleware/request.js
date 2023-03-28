// middleware to track number of requests
const winston = require('winston')
const Log= require('../model/LogModel')

// create logger model 
const Log = mongoose.model('log', logSchema)

// setup winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({ filename: 'request.log' })
    ]
  })

// define function to count requests
const countRequest = (req, res, next) => {

    console.log("Middleware working.....")
  
    // const user = req.ip;
  
    // Log.findOne({ user }).then(log => {
    //   if (!log) {
    //     // create one
    //     log = new Log({ user, count: 0 });
    //   }
    //   log.count++;
    //   // save log to database [mongodb]
    //   log.save().then(saved => {
    //     console.log(saved)
    //     logger.info({ user, count: log.count });
    //     next()
    //   }).catch(error => {
    //     console.log(error)
    //     next(error)
    //   })
  
    // }).catch(err => {
    //   console.log('Error Occured')
    // })
  }

module.exports = {countRequest}





