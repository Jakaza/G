const mongoose = require('mongoose')
const Profile = require('../model/profile')
const profileData = require('../../profile_data')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.PRO_DATABASE_URL,
      {
        dbName: 'portfolio',
        autoIndex: true, //make this also true
      })
    console.log('DB Connected.')

    const existingProfile = await Profile.findOne({ username: profileData.username });
    if (!existingProfile) {
      const newProfile = new Profile(profileData);
      await newProfile.save();
      console.log(`Inserted default profile document`);
    }
    console.log(`Default profile EXISTS`);

  } catch (error) {
    console.error(error)
  }
}
module.exports = connectDB;






