interface Member {
    id: number;
    firstName: string;
    lastName: string;
    login: string;
    workspacesIds: Array<number>;
    channelsIds: Array<number>;
}

export default Member;