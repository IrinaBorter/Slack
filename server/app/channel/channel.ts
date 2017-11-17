interface Channel {
    id: number;
    name: string;
    workspaceId: number;
    membersIds: Array<number>;
    messagesIds: Array<number>;
}

export default Channel;