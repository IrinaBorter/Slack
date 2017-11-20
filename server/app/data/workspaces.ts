import Workspace from '../workspace/workspace';

const workspaces: Workspace[] = [
    {
        id: 1,
        name: 'Workspace 1',
        url: 'workspace-1.slack.com',
        channelsIds: [1, 2],
        membersIds: [1, 2, 3],
    },
    {
        id: 2,
        name: 'Workspace 2',
        url: 'workspace-2.slack.com',
        channelsIds: [3, 4],
        membersIds: [1, 2, 3],
    },
    {
        id: 3,
        name: 'Workspace 3',
        url: 'workspace-3.slack.com',
        channelsIds: [5, 6],
        membersIds: [1, 2, 3],
    },
];

export default workspaces;