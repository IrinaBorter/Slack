import Channel from '../channel/channel';

const channels: Channel[] = [
    {
        id: 1,
        name: 'general',
        workspaceId: 1,
        membersIds: [1, 2, 3],
    },
    {
        id: 2,
        name: 'random',
        workspaceId: 1,
        membersIds: [1, 3],
    },
    {
        id: 3,
        name: 'work',
        workspaceId: 2,
        membersIds: [2, 3],
    },
    {
        id: 4,
        name: 'no-work',
        workspaceId: 2,
        membersIds: [1, 2, 3],
    },
    {
        id: 5,
        name: 'front-end',
        workspaceId: 3,
        membersIds: [1, 2],
    },
    {
        id: 6,
        name: 'flood',
        workspaceId: 3,
        membersIds: [1, 2, 3],
    },
];

export default channels;