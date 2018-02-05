import Channel from './channel';
import Message from '../message/message';
import channels from '../data/channels';
import messages from '../data/messages';
import { Request, Response } from '../../../node_modules/@types/express';

function getChannels(req: Request, res: Response) {
    res.status(200).send(channels);
}

function getChannelsByWorkspaceId(req: Request, res: Response) {
    const workspaceId = parseInt(req.params.workspaceId, 10);
    const filteredChannels = channels.filter(workspace => workspace.membersIds.indexOf(workspaceId) >= 0);

    if (!filteredChannels) {
        res.sendStatus(404);
    } else {
        res.status(200).send(filteredChannels);
    }
}

function getChannel(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const channel: Channel = channels.find((channel: Channel) => channel.id === id);

    if (!channel) {
        res.sendStatus(404);
    } else {
        res.status(200).send(channel);
    }
}

function createChannel(req: Request, res: Response) {
    const newChannel: Channel = {
        id: channels.length + 1,
        name: req.body.name,
        workspaceId: req.body.workspaceId,
        membersIds: req.body.membersIds,
    };

    channels.push(newChannel);
    res.status(200).send(channels);
}

function includeMemberToChannel(req: Request, res: Response) {
    const memberId =  parseInt(req.body.memberId, 10);
    const channelId = parseInt(req.body.channelId, 10);

    channels.forEach(channel => {
        if (channel.id === channelId) {
            channel.membersIds.push(memberId);
        }
    });

    res.status(200).send(channels);
}

function excludeMemberFromChannel(req: Request, res: Response) {
    const memberId =  parseInt(req.body.memberId, 10);
    const channelId = parseInt(req.body.channelId, 10);

    channels.forEach(channel => {
        if (channel.id === channelId) {
            channel.membersIds.splice(channel.membersIds.indexOf(memberId), 1);
        }
    });

    res.status(200).send(channels);
}

function getMessages(req: Request, res: Response) {
    const channelId: number = parseInt(req.params.id, 10);
    const foundMessages: Message[] = messages.filter(message => message.channel.id === channelId);

    if (!foundMessages) {
        res.sendStatus(404);
    } else {
        res.status(200).send(foundMessages);
    }
}

export {
    getChannels,
    getChannelsByWorkspaceId,
    getChannel,
    createChannel,
    includeMemberToChannel,
    excludeMemberFromChannel,
    getMessages,
};
