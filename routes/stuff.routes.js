const express = require('express')
const router = express.Router()
const { isLoggedIn } = require('../helpers/auth-helper');

let StuffModel = require('../models/Stuff.model')

router.get('/stuffs', (req, res) => {
     StuffModel.find()
          .then((stuffs) => {
               res.status(200).json(stuffs)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

router.post('/createS', (req, res) => {  
    const {categoryStuff, nameStuff, priceStuff, phoneStuff, cityStuff, image} = req.body;
    console.log(req.body)
    const ownerId = req.session.loggedInUser._id

    StuffModel.create({categoryStuff: categoryStuff, nameStuff: nameStuff, priceStuff: priceStuff, phoneStuff: phoneStuff, cityStuff: cityStuff, image: image, ownerId: ownerId})
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

router.get('/stuffs/:stuffId', (req, res) => {
    StuffModel.findById(req.params.stuffId)
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

router.delete('/stuffs/:id', (req, res) => {
    StuffModel.findByIdAndDelete(req.params.id)
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

router.patch('/stuffs/:id', (req, res) => {
     let id = req.params.id
     const {priceStuff, phoneStuff} = req.body;
     StuffModel.findByIdAndUpdate(id, {$set: {priceStuff: priceStuff, phoneStuff: phoneStuff}})
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
