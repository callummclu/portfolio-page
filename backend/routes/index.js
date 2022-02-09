var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

module.exports = router;
