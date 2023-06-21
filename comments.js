// Create web server application with Express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4001;
const comments = require('./data/comments');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    body: req.body.body,
    postId: 1
  };
  comments.push(newComment);
  res.json(newComment);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});