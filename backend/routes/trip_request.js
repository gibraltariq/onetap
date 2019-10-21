const express = require('express');
const router = express.Router();
router.use(express.json());

// Require controller modules.
const tripRequestController = require('../controllers/tripRequestController');

router.post('/',
    tripRequestController.tripRequestValidate,
    tripRequestController.tripRequestPost,
    tripRequestController.tripRequestReply);

module.exports = router;