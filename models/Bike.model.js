const mongoose = require('mongoose');

let BikeSchema = new mongoose.Schema({
    price: {
      type: Number
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
    },
    bikeType: {
      type: String,
      enum: ['city', 'trek', 'mountain'],
    },
    image: {
      type: String,
      default: "https://labs.paperpixel.net/facebook-cover-generator/img/profile_dummy.jpg"
    },
    phone: {
      type: Number
    },
    city: {
      type: String
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }


})

let BikeModel = mongoose.model('bike', BikeSchema)

module.exports = BikeModel;

