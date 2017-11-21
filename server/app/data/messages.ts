import Message from '../message/message';

const messages: Message[] = [
    {
        id: 1,
        authorId: 1,
        content: 'Hello!',
        time: new Date('2017-08-01T17:24:39'),
        channelId: 1,
    },
    {
        id: 2,
        authorId: 2,
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:25:23'),
        channelId: 1,
    },
    {
        id: 3,
        authorId: 1,
        content: 'Bla bla bla message',
        time: new Date('2017-08-01T17:26:56'),
        channelId: 1,
    },
];

export default messages;