const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

   email: {
      type: String,
      required: true,
      unique: true,
    },
    // Add more user fields as needed
  });

module.exports = mongoose.model('User', userSchema)