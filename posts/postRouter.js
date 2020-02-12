const express = require('express');
const Posts = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
  Posts.get()
  .then(posts => {
    posts 
      ? res.status(200).json(posts) 
      : res.status(404).json({error: "Fellowship not found"})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({error: "Error on our side, sorry"})
  })
});
// verified

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
