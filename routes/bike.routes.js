const express = require('express')
const router = express.Router()
const { isLoggedIn } = require('../helpers/auth-helper');

let BikeModel = require('../models/Bike.model')



router.get('/bikes', (req, res) => {
     console.log('THISSSSSS', req.session)
     BikeModel.find()
          .then((bikes) => {
               res.status(200).json(bikes)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

router.post('/create',  (req, res) => {  
    const {price, size, bikeType, image, phone, city} = req.body;
    
    
    console.log('This is req.body!!!', req.body)
    console.log('This is req.session!!!', req.session)
    console.log('req.session.loggedInUser._id' , req.session.loggedInUser._id)

    const ownerId = req.session.loggedInUser._id
    BikeModel.create({price: price, size: size, bikeType: bikeType, image: image, phone: phone, city: city, ownerId: ownerId})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    errorMessagge: 'Something went wrong',
                    message: err
               })
          })  
})

router.get('/bikes/:myId', (req, res) => {
    BikeModel.findById(req.params.myId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

router.delete('/bikes/:id', (req, res) => {
    BikeModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

router.patch('/bikes/:id', (req, res) => {
    let id = req.params.id
    const {price, phone} = req.body;
    BikeModel.findByIdAndUpdate(id, {$set: {price: price, phone: phone}})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

router.get("/user", isLoggedIn, (req, res, next) => {
     res.status(200).json(req.session.loggedInUser);
});

module.exports = router;
