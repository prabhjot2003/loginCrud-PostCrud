const express = require('express')
const router = express.Router();

const postController = require('../controllers/user.Post');


// Create a post
router.post('/create', postController.createPost);

// Get all posts
router.get('/posts', postController.getAllPosts);

//Get post by id
router.get('/posts/:id', postController.getPostById);

// Update a post by ID
router.put('/update/:id', postController.updatePost);

// Delete a post by ID
router.delete('/delete/:id', postController.deletePost);

module.exports = router;


