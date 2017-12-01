import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IWorkspace {}
interface IMember {}

@Injectable()
export class WorkspacesActions {
    static CREATE_WORKSPACE: string = 'CREATE_WORKSPACE';
    static INCLUDE_MEMBER_TO_WORKSPACE: string = 'INCLUDE_MEMBER_TO_WORKSPACE';
    static EXCLUDE_MEMBER_FROM_WORKSPACE: string = 'EXCLUDE_MEMBER_FROM_WORKSPACE';

    @dispatch()
    createWorkspace = (workspace: IWorkspace) => ({
        type: WorkspacesActions.CREATE_WORKSPACE,
        payload: workspace,
    })

    @dispatch()
    includeMemberToWorkspace = (member: IMember) => ({
        type: WorkspacesActions.INCLUDE_MEMBER_TO_WORKSPACE,
        payload: member,
    })

    @dispatch()
    excludeMemberFromWorkspace = (member: IMember) => ({
        type: WorkspacesActions.EXCLUDE_MEMBER_FROM_WORKSPACE,
        payload: member,
    })
}