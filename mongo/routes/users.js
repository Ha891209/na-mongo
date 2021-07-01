var express = require('express');
var router = express.Router();
const userModel = require('../model/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  userModel.find({}, (err, users) => {
    res.render('users', { users: users });

  });
});

module.exports = router;

router.get('/show/:id', function (req, res, next) {
  userModel.findOne({ _id: req.params.id }, (error, user) => {
    res.render('showuser', { user: user });
  });
});


router.post('/update/:id', function (req, res, next) {
  userModel.findOneAndUpdate({ _id: req.params.id }, req.body, (error, user) => {
    if (error) {
      console.error(error);
    }
    res.redirect('/users');
  });
});


router.get('/create', function (req, res, next) {
  res.render('createuser');
});


router.post('/create', function (req, res, next) {
  const user = new userModel(req.body);
  user.save((error, user) => {
    res.redirect('/users');
  });
});


router.get('/delete/:id', function (req, res, next) {
  userModel.deleteOne({ _id: req.params.id }, (error) => {
    res.redirect('/users');
  });
});

module.exports = router;
