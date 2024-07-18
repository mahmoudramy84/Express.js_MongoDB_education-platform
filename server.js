const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const trackRoutes = require('./routes/tracks');
const courseRoutes = require('./routes/courses');
const lessonRoutes = require('./routes/lessons');

dotenv.config();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/tracks', trackRoutes);
app.use('/courses', courseRoutes);
app.use('/lessons', lessonRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
