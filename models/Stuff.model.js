const mongoose = require('mongoose');

let StuffSchema = new mongoose.Schema({
    categoryStuff: {
      type: String
    },
    nameStuff: {
      type: String,
    },
    priceStuff: {
      type: Number
    },
    phoneStuff: {
      type: Number
    },
    cityStuff: {
      type: String
    },
    image: {
      type: String,
      default: "https://labs.paperpixel.net/facebook-cover-generator/img/profile_dummy.jpg"
    }
})

let StuffModel = mongoose.model('stuff', StuffSchema)

module.exports = StuffModel;