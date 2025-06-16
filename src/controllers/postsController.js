    const express = require('express');
    const router = express.Router();
    const postsController = require('../controllers/postsController');

    router.get('/', postsController.getAllPosts);
    router.post('/', postsProfile.createPost);
    // ... outras rotas para GET, PUT, DELETE
    
    module.exports = router;