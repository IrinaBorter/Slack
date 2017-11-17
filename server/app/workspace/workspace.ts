interface Workspace {
    id: number;
    name: string;
    url: string;
    channelsIds: Array<number>;
    membersIds: Array<number>;
}

export default Workspace;