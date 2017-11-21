interface Channel {
    id: number;
    name: string;
    workspaceId: number;
    membersIds: Array<number>;
}

export default Channel;