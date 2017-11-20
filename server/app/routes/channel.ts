import * as express from 'express';
import {
    getChannels,
    getChannel,
    createChannel,
    includeMemberToChannel,
    excludeMemberFromChannel,
    getMessages,
    putMessage,
} from '../channel/channelController';

const channelRoutes = express.Router({ mergeParams: true });

channelRoutes.get('/', getChannels);
channelRoutes.get('/:id', getChannel);
channelRoutes.post('/', createChannel);
channelRoutes.post('/member', includeMemberToChannel);
channelRoutes.delete('/member', excludeMemberFromChannel);
channelRoutes.get('/:id/messages', getMessages);
channelRoutes.post('/message', putMessage);

export default channelRoutes;