const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

// Get all tracks
router.get('/', async (req, res) => {
    try {
        const tracks = await Track.find().populate('courses');
        res.json(tracks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new track
router.post('/', async (req, res) => {
    const track = new Track({
        name: req.body.name,
        description: req.body.description,
        courses: req.body.courses
    });

    try {
        const newTrack = await track.save();
        res.status(201).json(newTrack);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
