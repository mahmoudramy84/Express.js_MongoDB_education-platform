const express = require('express');
const router = express.Router();
const {
    getAllLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
    getLessonsByCourseId
} = require('../controllers/lessonController');

// Get all lessons
router.get('/', getAllLessons);

// Get lessons by course ID
router.get('/course/:courseId', getLessonsByCourseId);

// Get lesson by ID
router.get('/:id', getLessonById);

// Create a new lesson
router.post('/', createLesson);

// Update a lesson
router.put('/:id', updateLesson);

// Delete a lesson
router.delete('/:id', deleteLesson);

module.exports = router;
