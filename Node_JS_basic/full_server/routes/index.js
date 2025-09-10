import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router(); // A router instance is a complete middleware and routing system

// Export the router to be used in the main app
// router for the main page
router.get('/', AppController.getHomepage);

// router for the students page
router.get('/students', StudentsController.getAllStudents);

// router for the students by major page (CS or SWE)
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
