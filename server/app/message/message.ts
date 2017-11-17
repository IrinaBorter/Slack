interface Message {
    id: number;
    authorId: number;
    content: string;
    time: Date;
    channelId: number;
    workspaceId: number;
}

export default Message;