// require your server and launch it
require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`\n*** Listening on port ${port} ***\n`)
})