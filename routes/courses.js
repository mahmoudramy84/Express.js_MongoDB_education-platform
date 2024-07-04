const express = require('express');
const router = express.Router();
const {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courseController');

// Get all courses
router.get('/', getAllCourses);

// Get course by ID
router.get('/:id', getCourseById);

// Create a new course
router.post('/', createCourse);

// Update a course
router.put('/:id', updateCourse);

// Delete a course
router.delete('/:id', deleteCourse);

module.exports = router;
