const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');
const trackRoutes = require('./routes/tracks');
const courseRoutes = require('./routes/courses');
const lessonRoutes = require('./routes/lessons');



// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myEducationPlatform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/courses', courseRoutes);
app.use('/lessons', lessonRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
