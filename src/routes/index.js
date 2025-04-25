const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/', controller.index);
router.get('/detailPlan/:id', controller.detailPlan);
router.get('/sobreMi', controller.sobreMi);

module.exports = router;