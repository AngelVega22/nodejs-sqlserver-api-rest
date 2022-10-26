"use strict";

var _reportsController = require("../controllers/reportsController");
var express = require('express');
var router = express.Router();
/* GET home page. */

router.get('/test', _reportsController.apiTesting);
module.exports = router;