import Message from '../message/message';

const messages: Message[] = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Hello!',
        time: new Date('2017-08-01T17:24:39'),
        channel: {
            id: 1,
            name: 'general',
        },
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:25:23'),
        channel: {
            id: 1,
            name: 'general',
        },
    },
    {
        id: 3,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:26:56'),
        channel: {
            id: 1,
            name: 'general',
        },
    },

    {
        id: 1,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Hello!',
        time: new Date('2017-08-01T17:24:39'),
        channel: {
            id: 2,
            name: 'work',
        },
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:25:23'),
        channel: {
            id: 2,
            name: 'work',
        },
    },
    {
        id: 3,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:26:56'),
        channel: {
            id: 2,
            name: 'work',
        },
    },

    {
        id: 1,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Hello!',
        time: new Date('2017-08-01T17:24:39'),
        channel: {
            id: 3,
            name: 'no-work',
        },
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:25:23'),
        channel: {
            id: 3,
            name: 'no-work',
        },
    },
    {
        id: 3,
        author: {
            id: 1,
            name: 'Iryna',
        },
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:26:56'),
        channel: {
            id: 3,
            name: 'no-work',
        },
    },
];

export default messages;