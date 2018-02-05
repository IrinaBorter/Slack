import Message from '../message/message';
import Member from '../member/member';
import Channel from '../channel/channel';
import messages from '../data/messages';
import members from '../data/members';
import channels from '../data/channels';
import { Request, Response } from '../../../node_modules/@types/express';

function deleteMessage(req: Request, res: Response) {
    const messageId = parseInt(req.body.messageId, 10);
    const indexOfMessage = messages.findIndex(message => message.id === messageId);

    indexOfMessage >= 0 && messages.splice(indexOfMessage, 1);
    res.status(200).send(messages);
}

function getMessagesByChannelId(req: Request, res: Response) {
    const channelId = parseInt(req.params.channelId, 10);
    const filteredMessages = messages.filter(message => message.channel.id === channelId);

    if (!filteredMessages.length) {
        res.sendStatus(404);
    } else {
        res.status(200).send(filteredMessages);
    }
}

function editMessage(req: Request, res: Response) {
    const messageId = parseInt(req.body.messageId, 10);
    const newMessageContent = req.body.content;

    messages.forEach(message => {
        if (message.id === messageId) {
            message.content = newMessageContent;
        }
    });

    res.status(200).send(messages);
}

function pushMessage(req: Request, res: Response) {
    const author: Member = members.find(member => member.id === parseInt(req.body.authorId, 10));
    const channel: Channel = channels.find(channel => channel.id === parseInt(req.body.channelId, 10));

    const newMessage: Message = {
        id: messages.length + 1,
        author: {
            id: author.id,
            name: author.name,
        },
        content: req.body.content,
        time: new Date(),
        channel: {
            id: channel.id,
            name: channel.name,
        },
    };

    messages.push(newMessage);

    res.status(200).send(messages.filter(message => message.channel.id === channel.id));
}

export {
    getMessagesByChannelId,
    deleteMessage,
    editMessage,
    pushMessage,
};

