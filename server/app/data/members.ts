import Member from '../member/member';

const members: Member[] = [
    {
        id: 1,
        name: 'Iryna Barsukova',
        login: 'irinaborter',
        workspacesIds: [1, 2],
        channelsIds: [1, 2],
    },
    {
        id: 2,
        name: 'Kate Shamai',
        login: 'kshamai',
        workspacesIds: [1, 2],
        channelsIds: [1, 2, 3],
    },
    {
        id: 3,
        name: 'Roman Pechersky',
        login: 'rmnpech',
        workspacesIds: [1, 2],
        channelsIds: [1, 3],
    },
];

export default members;