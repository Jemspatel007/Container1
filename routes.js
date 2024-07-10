const express = require('express');
const router = express.Router();
const { calculate } = require('./controllers/calculateController');
const { storeFile } = require('./controllers/storeFileController');

router.post('/calculate', calculate);
router.post('/store-file', storeFile);

module.exports = router;