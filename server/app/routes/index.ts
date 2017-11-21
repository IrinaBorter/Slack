import * as express from 'express';
import * as path from 'path';
import { Request, Response } from '../../../node_modules/@types/express';

import workspaceRoutes from './workspace';
import channelRoutes from './channel';
import memberRoutes from './member';
import messageRoutes from './message';

const staticPath = path.resolve('./dist');
const routes = express.Router();

routes.use('/api/workspaces', workspaceRoutes);
routes.use('/api/channels', channelRoutes);
routes.use('/api/members', memberRoutes);
routes.use('/api/messages', messageRoutes);

routes.get('*', (request: Request, response: Response) => {
    response.sendFile(staticPath + '/index.html');
});

export default routes;