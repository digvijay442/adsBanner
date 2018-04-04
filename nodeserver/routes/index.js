var express = require('express');
var router = express.Router();
var path = require('path');
var multer  =   require('multer');

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    // callback(null, file.fieldname + file.originalname + '-' + Date.now() + path.extname(file.originalname));
    callback(null, file.fieldname + '-' + Date.now() + file.originalname);
  }
});
var upload = multer({ storage : storage }).array('photo',20);

router.post('/api/photo',function(req,res){
  upload(req,res,function(err) {
    console.log("------------------------req.files-----------------------");
    console.log(req.files);
      if(err) {
          return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
