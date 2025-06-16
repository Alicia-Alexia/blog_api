    const Post = require('../models/Post'); 

    const postsController = {
      getAllPosts: async (req, res) => {
        try {
          const posts = await Post.find();
          res.json(posts);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },
      createPost: async (req, res) => {
          const newPost = new Post(req.body);
          try{
              const savedPost = await newPost.save();
              res.status(201).json(savedPost);
          }catch(error){
              res.status(400).json({ message: error.message });
          }
      }
      
    };

    module.exports = postsController;