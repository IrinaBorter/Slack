import Workspace from './workspace';
import workspaces from '../data/workspaces';

function getWorkspaces(req: any, res: any) {
    res.status(200).send(workspaces);
}

function getWorkspace(req: any, res: any) {
    const id = parseInt(req.params.id, 10);

    const workspace = workspaces.find(workspace => workspace.id === id);

    if (!workspace) {
        res.sendStatus(400);
    } else {
        res.status(200).send(workspace);
    }
}

function createWorkspace(req: any, res: any) {
    const newWorkspace: Workspace = {
        id: workspaces.length + 1,
        name: req.body.name,
        url: req.body.url,
        channelsIds: [1, 2],
        membersIds: req.body.memberId,
    };

    workspaces.push(newWorkspace);
    res.status(200).send(workspaces);
}

function addNewMember(req: any, res: any) {
    const memberId =  parseInt(req.params.memberId, 10);
    const workspaceId = parseInt(req.params.workspaceId, 10);

    workspaces.forEach(workspace => {
        if (workspace.id === workspaceId) {
            workspace.membersIds.push(memberId);
        }
    });

    res.status(200).send(workspaces);
}

function excludeMember(req: any, res: any) {
    const memberId =  parseInt(req.params.memberId, 10);
    const workspaceId = parseInt(req.params.workspaceId, 10);

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
    addNewMember,
    excludeMember,
};