var express = require('express');
var router = express.Router();

var bookModel = require('./users');

/* GET home page. */

router.get('/', function(req, res){
  res.status(200).json({ msg: 'index page connected' });
})

router.post('/setrecord', function(req, res){
 var data =  new bookModel({
    book_Title : req.body.book_Title,
    author_Name : req.body.author_Name
  });
  data.save()
    .then((createdBook) => res.status(201)
    .json({message: 'your book has been registered', value : createdBook}))
    .catch(err => res.status(500).json({err}));
   
})

router.get('/getrecord/:id', function(req, res) {

  bookModel.findOne({_id: req.params.id})
    .then(foundBook => {
      res.status(200).json({foundBook})
    })
    .catch(err => res.status(500).json({err}));
});


module.exports = router;
