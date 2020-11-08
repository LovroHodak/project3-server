const mongoose = require('mongoose');

let FreeSchema = new mongoose.Schema({
    nameFree: {
      type: String,
    },
    phoneFree: {
      type: Number
    },
    cityFree: {
      type: String
    },
    image: {
      type: String,
      default: "https://labs.paperpixel.net/facebook-cover-generator/img/profile_dummy.jpg"
    }
})

let FreeModel = mongoose.model('free', FreeSchema)

module.exports = FreeModel;