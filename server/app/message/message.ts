interface Message {
    id: number;
    authorId: number;
    content: string;
    time: Date;
    channelId: number;
}

export default Message;