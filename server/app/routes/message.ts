import * as express from 'express';
import {
    getMessagesByChannelId,
    deleteMessage,
    editMessage,
    pushMessage,
} from '../message/messageController';

const messageRoutes = express.Router({ mergeParams: true });

messageRoutes.get('/channels/:channelId', getMessagesByChannelId);
messageRoutes.delete('/', deleteMessage);
messageRoutes.put('/', editMessage);
messageRoutes.post('/', pushMessage);

export default messageRoutes;