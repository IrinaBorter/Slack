import Workspace from './workspace';
import workspaces from '../data/workspaces';
import { Request, Response } from '../../../node_modules/@types/express';
import defaultChannels from '../data/defaultChannels';

function getWorkspaces(req: Request, res: Response) {
    res.status(200).send(workspaces);
}

function getWorkspace(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    const workspace = workspaces.find(workspace => workspace.id === id);

    if (!workspace) {
        res.sendStatus(404);
    } else {
        res.status(200).send(workspace);
    }
}

function createWorkspace(req: Request, res: Response) {
    const newWorkspace: Workspace = {
        id: workspaces.length + 1,
        name: req.body.name,
        url: req.body.url,
        channelsIds: defaultChannels.map(channel => channel.id),
        membersIds: req.body.memberId,
    };

    workspaces.push(newWorkspace);
    res.status(200).send(workspaces);
}

function includeMemberToWorkspace(req: Request, res: Response) {
    const memberId =  parseInt(req.body.memberId, 10);
    const workspaceId = parseInt(req.body.workspaceId, 10);

    workspaces.forEach(workspace => {
        if (workspace.id === workspaceId) {
            workspace.membersIds.push(memberId);
        }
    });

    res.status(200).send(workspaces);
}

function excludeMemberFromWorkspace(req: Request, res: Response) {
    const memberId =  parseInt(req.body.memberId, 10);
    const workspaceId = parseInt(req.body.workspaceId, 10);

    workspaces.forEach(workspace => {
        if (workspace.id === workspaceId) {
            workspace.membersIds.splice(workspace.membersIds.indexOf(memberId), 1);
        }
    });

    res.status(200).send(workspaces);
}

export {
    getWorkspaces,
    getWorkspace,
    createWorkspace,
    includeMemberToWorkspace,
    excludeMemberFromWorkspace,
};