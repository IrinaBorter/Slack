const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
const staticPath = path.resolve('./dist');

server.use(bodyParser.json());
server.use(express.static(staticPath));

server.listen(3000, () => {
    console.log('Listening on port 3000!')
});

server.get('*', (request: any, response: any) => {
    response.sendFile(staticPath + '/index.html');
});
