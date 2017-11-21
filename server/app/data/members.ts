import Member from '../member/member';

const members: Member[] = [
    {
        id: 1,
        firstName: 'Iryna',
        lastName: 'Barsukova',
        login: 'irinaborter',
        workspacesIds: [1, 2],
        channelsIds: [1, 2, 4, 5, 6],
    },
    {
        id: 2,
        firstName: 'Kate',
        lastName: 'Shamai',
        login: 'kshamai',
        workspacesIds: [1, 2],
        channelsIds: [1, 3, 4, 5, 6],
    },
    {
        id: 3,
        firstName: 'Roman',
        lastName: 'Pechersky',
        login: 'rmnpech',
        workspacesIds: [1, 2],
        channelsIds: [1, 2, 3, 4, 6],
    },
];

export default members;