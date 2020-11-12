const express = require('express');
const router  = express.Router();


// include CLOUDINARY:
const uploader = require('../config/cloudinary.config.js');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
     console.log('file is: ', req.file)
     //console.log(req.body.imageUrl)
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    res.json({ image: req.file.path });
})

router.post('/imageUploadPassImage', (req, res) => {
  const values = Object.values(req.body)
     const promises = values.map(image => cloudinary.v2.uploader.upload(image,
 function(error, result) {console.log(result, error); }));

     Promise
       .all(promises)
       .then(results => res.json(results))
   })

module.exports = router;