const mongoose = require('mongoose')

const connectDB = async () => {
    try {
<<<<<<< Updated upstream
        await mongoose.connect(process.env.DATABASE_URI, 
            {   dbName: 'portfolio', 
                autoIndex: true, //make this also true
             })
=======

        await mongoose.connect(process.env.DATABASE_URI)
>>>>>>> Stashed changes
        console.log('DB Connected.')

    } catch (error) {
        console.error(error)
    }
}
module.exports = connectDB;






