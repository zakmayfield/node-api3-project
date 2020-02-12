//imports
const express = require('express');
const server = express();

//middleware stack
server.use(express.json())

//custom middleware!
function logger(req, res, next) {}

//routes
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//server listen 5000
server.listen(5000, () => {
  console.log(`\n Peer into Port 5000 for your future \n`)
})

//export
module.exports = server;
