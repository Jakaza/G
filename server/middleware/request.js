// middleware to track number of requests
const winston = require('winston')
const uuid = require('uuid')
const path = require('path')
const Log = require('../model/LogModel')


// setup winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: path.join(__dirname, 'log', 'request.log') })
  ]
})

// define function to count requests
const countRequest = async (req, res, next) => {
  console.log("Middleware working.....")
  // Retrieve the user ID from the session
  const userID = req.session.userID;

  // Check if the user ID exists
  if (!userID) {
    // If the user ID doesn't exist, generate a new unique ID
    req.session.userID = uuid.v4();
  }

  // Increment the request count for the user
  req.session.requestCount = req.session.requestCount ? req.session.requestCount + 1 : 1;

  try {
    // Create a new log entry
    const newLog = new Log({
      user: userID || req.session.userID,
      count: req.session.requestCount,
      deviceInfo: req.headers['user-agent']
    });


    // Save the log entry to the database
    const savedLog = await newLog.save();

    // Log the request using Winston
    logger.info('Request received', { timestamp: savedLog.timestamp });
  } catch (err) {
    console.error(err);
  }

  next();

}

module.exports = { countRequest }





