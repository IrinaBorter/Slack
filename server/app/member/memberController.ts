import Member from './member';
import members from '../data/members';
import workspaces from '../data/workspaces';

import { Request, Response } from '../../../node_modules/@types/express';

function getMembers(req: Request, res: Response) {
    res.status(200).send(members);
}

function getMember(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    const member: Member = members.find((member: Member) => member.id === id);

    if (!member) {
        res.sendStatus(404);
    } else {
        res.status(200).send(member);
    }
}

function registerNewMember(req: Request, res: Response) {
    const newMember: Member = {
        id: members.length + 1,
        name: req.body.name,
        login: req.body.login,
        workspacesIds: [parseInt(req.body.workspaceId, 10)],
        channelsIds: workspaces.find(workspace => workspace.id === parseInt(req.body.workspaceId, 10)).channelsIds,
    };

    members.push(newMember);

    res.status(200).send(members);
}

export {
    getMembers,
    getMember,
    registerNewMember,
};