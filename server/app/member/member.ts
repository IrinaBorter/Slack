interface Member {
    id: number;
    name: string;
    login: string;
    workspacesIds: Array<number>;
    channelsIds: Array<number>;
}

export default Member;