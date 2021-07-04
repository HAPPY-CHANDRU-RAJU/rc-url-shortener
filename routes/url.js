const router = require('express').Router();
const mongoose = require('mongoose');
const Url = require('../models/url.model');
const sha1 = require('sha1');


router.route('/show').get((req, res) => {
  Url.find({}, {}, { sort: { 'createdAt' : -1 } })
    .then(url => res.json(url))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  var sid = req.params.id;
  Url.find({"shortlink":sid}, {"urllink": 1, "_id": 0})
  .then(url => res.json(url))
  .catch(err => res.status(400).json('Error: ' + err));
  
  
});

router.route('/insert').post((req, res) => {
  
  const urllink = req.body.urllink;
  var hash = sha1(urllink);
  const shortlink = hash.slice(0, 6);
 //const shortlink = "15cf2g";
 
  const newurl = new Url({
    urllink,
    shortlink,
  });

  newurl.save()
    .then(() => res.json('URL added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/read/:id').get((req, res) => {
  Url.findById(req.params.id)
    .then(url => res.json(url))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/delete/:id').delete((req, res) => {
  Url.findByIdAndDelete(req.params.id)
    .then(url => res.json("Deleted"))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Url.findByIdAndUpdate(req.params.id)
    .then(url => {
      url.urllink = req.body.urllink;
      url.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;



