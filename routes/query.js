var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var name = req.query.name;
  var mail = req.query.mail;
  var data = {
    title: 'Hello!',
    content: 'Your name is ' + name + '.<br>' +
      'mailaddress is ' + mail + '.<br>'
  };
  res.render('query', data);
});

module.exports = router;
