require('dotenv').config()

const server = require('./server.js');

const port = process.env.PORT;
const host = process.env.HOST;

//-----server listen 5000-----
server.listen(port, () => {
  console.log(`\n Peer into ${host}${port} for your future \n`)
})