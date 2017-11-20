import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import routes from './app/routes';

const server = express();
const staticPath = path.resolve('./dist');

server.use(bodyParser.json());
server.use(express.static(staticPath));
server.use('/', routes);

server.listen(3000, () => {
    console.log('Listening on port 3000!')
});
