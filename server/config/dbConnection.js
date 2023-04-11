const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.PRO_DATABASE_URL,
      {
        dbName: 'portfolio',
        autoIndex: true, //make this also true
      })
    console.log('DB Connected.')

  } catch (error) {
    console.error(error)
  }
}
module.exports = connectDB;






