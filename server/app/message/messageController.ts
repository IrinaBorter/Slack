import messages from '../data/messages';
import { Request, Response } from '../../../node_modules/@types/express';

function deleteMessage(req: Request, res: Response) {
    const messageId = parseInt(req.body.messageId, 10);

    let indexOfMessage = -1;
    messages.forEach((message, index) => {
        if (message.id === messageId) {
            indexOfMessage = index;
        }
    });

    indexOfMessage >= 0 && messages.splice(indexOfMessage, 1);

    res.status(200).send(messages);
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
    deleteMessage,
    editMessage,
};

