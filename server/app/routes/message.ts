import * as express from 'express';
import {
    deleteMessage,
    editMessage,
} from '../message/messageController';

const messageRoutes = express.Router({ mergeParams: true });

messageRoutes.delete('/', deleteMessage);
messageRoutes.put('/', editMessage);

export default messageRoutes;