const express = require('express')
const router = express.Router()

let BikeModel = require('../models/Bike.model')

router.get('/bikes', (req, res) => {
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

router.post('/create', (req, res) => {  
    const {price, size, bikeType, image, phone, city} = req.body;
    console.log(req.body)
    BikeModel.create({price: price, size: size, bikeType: bikeType, image: image, phone: phone, city: city})
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

module.exports = router;
