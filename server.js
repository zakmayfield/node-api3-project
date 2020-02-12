//-----imports-----
const express = require('express');
const server = express();
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');


//-----middleware stack-----
server.use(express.json())
server.use(logger);

//-----custom middleware-----
//logger middleware -- global / will check EVERY request
function logger(req, res, next) {
  console.log(
    `LOGGER: ${req.method} request to ${req.originalUrl} at ${new Date().toISOString()}`
  )
  next()
}



//-----routes / enpoints-----
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


//-----server listen 5000-----
server.listen(5000, () => {
  console.log(`\n Peer into Port 5000 for your future \n`)
})


//-----export-----
module.exports = server;
