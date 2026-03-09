const express = require('express');
const router = express.Router();
const { getSamples, createSample, updateSampleStatus } = require('../controllers/sampleController');

router.route('/')
    .get(getSamples)
    .post(createSample);

router.route('/:id')
    .put(updateSampleStatus);

module.exports = router;
