const express = require('express');
const router = express.Router();
import {apiTesting} from "../controllers/reportsController";
/* GET home page. */

router.get('/test',apiTesting );

module.exports = router;
