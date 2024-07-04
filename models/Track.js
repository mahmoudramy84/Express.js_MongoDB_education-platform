const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    name: String,
    description: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
