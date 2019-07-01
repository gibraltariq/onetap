const express = require('express');
const router = express.Router();
router.use(express.json());

// Require controller modules.
const activityController = require('../controllers/activityController');

router.get('/:trip_id', activityController.activityList);

router.get('/', (req, res) => {
    res.send('You are GETing.');
});


module.exports = router;
