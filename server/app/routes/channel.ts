import * as express from 'express';
import {
    getChannels,
    getChannelsByWorkspaceId,
    getChannel,
    createChannel,
    includeMemberToChannel,
    excludeMemberFromChannel,
    getMessages,
    putMessage,
} from '../channel/channelController';

const channelRoutes = express.Router({ mergeParams: true });

channelRoutes.get('/', getChannels);
channelRoutes.get('/workspace/:workspaceId', getChannelsByWorkspaceId);
channelRoutes.get('/:id', getChannel);
channelRoutes.post('/', createChannel);
channelRoutes.post('/member', includeMemberToChannel);
channelRoutes.delete('/member', excludeMemberFromChannel);
channelRoutes.get('/:id/messages', getMessages);
channelRoutes.post('/message', putMessage);

export default channelRoutes;