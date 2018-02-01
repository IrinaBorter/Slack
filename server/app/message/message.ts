interface Message {
    id: number;
    author: {
        id: number;
        name: string;
    };
    content: string;
    time: Date;
    channel: {
        id: number;
        name: string;
    };
}

export default Message;