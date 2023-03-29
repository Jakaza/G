const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, 
            {   dbName: 'portfolio',         
                useCreateIndex: true, //make this true
                autoIndex: true, //make this also true
             })
        console.log('DB Connected.')

    } catch (error) {
        console.error(error)
    }
}
module.exports = connectDB;






