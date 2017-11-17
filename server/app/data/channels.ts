import Channel from '../channel/channel';

const channels: Channel[] = [
    {
        id: 1,
        name: '#general',
        workspaceId: 1,
        membersIds: [1, 2, 3],
        messagesIds: [],
    },
    {
        id: 2,
        name: '#random',
        workspaceId: 1,
        membersIds: [1, 3],
        messagesIds: [],
    },
    {
        id: 3,
        name: '#general',
        workspaceId: 2,
        membersIds: [2, 3],
        messagesIds: [],
    },
    {
        id: 4,
        name: '#random',
        workspaceId: 2,
        membersIds: [1, 2, 3],
        messagesIds: [],
    },
    {
        id: 5,
        name: '#general',
        workspaceId: 3,
        membersIds: [1, 2],
        messagesIds: [],
    },
    {
        id: 6,
        name: '#random',
        workspaceId: 3,
        membersIds: [1, 2, 3],
        messagesIds: [],
    },
];

export default channels;