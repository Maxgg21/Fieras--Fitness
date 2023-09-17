const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.index);
router.get('/detailPlan', controller.detailPlan);

module.exports = router;