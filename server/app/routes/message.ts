import * as express from 'express';
import {
    getMessagesByChannelId,
    deleteMessage,
    editMessage,
} from '../message/messageController';

const messageRoutes = express.Router({ mergeParams: true });

messageRoutes.get('/channels/:channelId', getMessagesByChannelId);
messageRoutes.delete('/', deleteMessage);
messageRoutes.put('/', editMessage);

export default messageRoutes;