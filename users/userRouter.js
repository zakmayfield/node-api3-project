const express = require('express');
const Users = require('./userDb');
const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  Users.get()
    .then(users => {
      users 
        ? res.status(200).json(users) 
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

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
