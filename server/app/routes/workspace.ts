import * as express from 'express';
import {
    getWorkspaces,
    getWorkspace,
    createWorkspace,
    includeMemberToWorkspace,
    excludeMemberFromWorkspace,
} from '../workspace/workspacesController';

const workspaceRoutes = express.Router({ mergeParams: true });

workspaceRoutes.get('/', getWorkspaces);
workspaceRoutes.get('/:id', getWorkspace);
workspaceRoutes.post('/', createWorkspace);
workspaceRoutes.post('/member', includeMemberToWorkspace);
workspaceRoutes.delete('/member', excludeMemberFromWorkspace);

export default workspaceRoutes;