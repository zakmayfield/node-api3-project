require('dotenv').config()

const server = require('./server.js');

const port = process.env.PORT;

//-----server listen 5000-----
server.listen(port, () => {
  console.log(`\n Peer into Port ${port} for your future \n`)
})