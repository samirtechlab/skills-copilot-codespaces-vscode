// Create web server

// Import express
const express = require('express');
const { body } = require('express-validator');

// Import controller
const commentController = require('../controllers/comments');

// Import middleware
const isAuth = require('../middleware/is-auth');

// Create router
const router = express.Router();

// GET /comments
router.get('/', isAuth, commentController.getComments);

// POST /comments
router.post(
    '/',
    isAuth,
    [
        body('content')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Content is too short'),
    ],
    commentController.postComment
);

// PUT /comments
router.put(
    '/',
    isAuth,
    [
        body('content')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Content is too short'),
    ],
    commentController.updateComment
);

// DELETE /comments
router.delete('/:id', isAuth, commentController.deleteComment);

// Export router
module.exports = router;



