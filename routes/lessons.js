const express = require('express');
const router = express.Router();
const {
    getAllLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson
} = require('../controllers/lessonController');

// Get all lessons
router.get('/', getAllLessons);

// Get lesson by ID
router.get('/:id', getLessonById);

// Create a new lesson
router.post('/', createLesson);

// Update a lesson
router.put('/:id', updateLesson);

// Delete a lesson
router.delete('/:id', deleteLesson);

module.exports = router;
