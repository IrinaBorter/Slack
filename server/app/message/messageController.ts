import messages from '../data/messages';
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

export {
    getMessagesByChannelId,
    deleteMessage,
    editMessage,
};

