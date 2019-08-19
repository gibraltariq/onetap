const express = require('express');
const router = express.Router();
router.use(express.json());

// Require controller modules.
const tripController = require('../controllers/tripController');
const activityController = require('../controllers/activityController');

router.get('/:trip_id', tripController.tripDetail, activityController.activityList);

router.get('/', (req, res) => {
    res.status(400).send('Trip id is required');
});

module.exports = router;
