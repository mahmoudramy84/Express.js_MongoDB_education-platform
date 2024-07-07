const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/users');
const trackRoutes = require('./routes/tracks');
const courseRoutes = require('./routes/courses');
const lessonRoutes = require('./routes/lessons');

dotenv.config();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


// Routes
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/courses', courseRoutes);
app.use('/lessons', lessonRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
