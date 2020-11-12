const express = require('express')
const router = express.Router()
const { isLoggedIn } = require('../helpers/auth-helper');

let FreeModel = require('../models/Free.model')

router.get('/frees', (req, res) => {
     FreeModel.find()
          .then((frees) => {
               res.status(200).json(frees)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

router.post('/createF', (req, res) => {  
    const {nameFree, phoneFree, cityFree, image} = req.body;
    const ownerId = req.session.loggedInUser._id
    console.log(req.body)
    FreeModel.create({nameFree: nameFree, phoneFree: phoneFree, cityFree: cityFree, image: image, ownerId: ownerId})
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

router.get('/frees/:freeId', (req, res) => {
    FreeModel.findById(req.params.freeId)
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

router.delete('/frees/:id', (req, res) => {
    FreeModel.findByIdAndDelete(req.params.id)
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

router.get("/user", isLoggedIn, (req, res, next) => {
     res.status(200).json(req.session.loggedInUser);
});


module.exports = router;
