const express = require("express");
const router = express.Router();
// const bodyParser = require("body-parser");
const DAL = require("../dataAccessLayer");

/* GET home page. */
router.get('/series', function(req, res, next) {
  DAL.getAllSeries(req, res);
});

module.exports = router;
