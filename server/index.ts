const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
const staticPath = path.resolve('./dist');

import {
    getWorkspaces,
    getWorkspace,
    createWorkspace,
    addNewMember,
    excludeMember,
} from './app/workspace/workspacesController';

server.use(bodyParser.json());
server.use(express.static(staticPath));

server.listen(3000, () => {
    console.log('Listening on port 3000!')
});

server.get('/api/workspaces', getWorkspaces);

server.get('/api/workspaces/:id', getWorkspace);
server.post('/api/workspaces', createWorkspace);
server.put('/api/workspaces/:workspaceId/addMember/:memberId', addNewMember);
server.put('/api/workspaces/:workspaceId/excludeMember/:memberId', excludeMember);

server.get('*', (request: any, response: any) => {
    response.sendFile(staticPath + '/index.html');
});
