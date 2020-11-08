const express = require('express')
const router = express.Router()

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
    console.log(req.body)
    FreeModel.create({nameFree: nameFree, phoneFree: phoneFree, cityFree: cityFree, image: image})
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



module.exports = router;
