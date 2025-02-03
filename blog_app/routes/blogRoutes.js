const express = require('express');
const router = express.Router();

let posts = []; // Temporary storage (No Database)

// Home Page - Show all posts
router.get('/', (req, res) => {
  res.render('index', { posts });
});

// Form to Create a New Post
router.get('/new', (req, res) => {
  res.render('newPost');
});

// Handle Post Submission
router.post('/posts', (req, res) => {
  const { title, content } = req.body;
  const id = posts.length + 1;
  posts.push({ id, title, content });
  res.redirect('/');
});

// Edit Post Form
router.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('editPost', { post });
});

// Handle Post Update
router.put('/posts/:id', (req, res) => {
  const { title, content } = req.body;
  const post = posts.find(p => p.id == req.params.id);
  post.title = title;
  post.content = content;
  res.redirect('/');
});

// Delete a Post
router.delete('/posts/:id', (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect('/');
});

module.exports = router;
