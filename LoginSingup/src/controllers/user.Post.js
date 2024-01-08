const PostModel = require('../models/use.Post');
const UserModel = require('../models/user.schema');

//create post
const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);
    try {

      const savedPost = await newPost.save();
      res.status(201).json({
        success: true,
        message:"posted successfully"})

       } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ success: 
            false, message: 'Internal Server Error', error: error.message });
      } 
  
};
  


//Read All Post
const getAllPosts = async (req, res) => {
    try {
      // Retrieve all posts
      const posts = await PostModel.find();
  
      res.status(200).json({ success: true, message: 'All posts retrieved successfully', posts });
    } catch (error) {
      console.error('Error getting all posts:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
  };
  
//Read post By id
const getPostById = async (req, res) => {
    try {
      const postId = req.params.id;
  
      // Find post by ID
      const post = await PostModel.findById(postId);
  
      if (!post) {
        return res.status(404).json({ 
            success: false, 
            message: 'Post not found', 
            error: 'Post with the provided ID does not exist' });
      }
  
      res.status(200).json({ 
        success: true, 
        message: 'Post retrieved successfully',
         post });
    } catch (error) {
      console.error('Error getting post by ID:', error);
      res.status(500).json({
         success: false, 
         message: 'Internal Server Error', 
         error: error.message });
    }
};

//Update Post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Check if the post exists
    const existingPost = await PostModel.findById(postId);

    if (!existingPost) {
      return res.status(404).json({
        success: false,
        message: 'Post not found',
        error: 'Post with the provided ID does not exist'
      });
    }

    // Update post data
    existingPost.tittle = req.body.title; // Corrected typo
    existingPost.content = req.body.content;

    // Save the updated post
    const updatedPost = await existingPost.save();

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      post: updatedPost
    });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message
    });
  }
};




//Delete Post
const deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
  
    
      const deletedPost = await PostModel.findByIdAndDelete(postId);
  
      if (!deletedPost) {
        return res.status(404).json({ 
            success: false, 
            message: 'Post not found', 
            error: 'Post with the provided ID does not exist' });
        }
  
      res.status(200).json({ 
        success: true, 
        message: 'Post deleted successfully', 
        post: deletedPost });
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal Server Error', 
        error: error.message });
    }
};
  
  
  
module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
