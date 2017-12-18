import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

interface IWorkspace {}
interface IMember {}

@Injectable()
export class WorkspaceActions {
    static FETCH_WORKSPACES: string = 'FETCH_WORKSPACES';
    static CREATE_WORKSPACE: string = 'CREATE_WORKSPACE';
    static INCLUDE_MEMBER_TO_WORKSPACE: string = 'INCLUDE_MEMBER_TO_WORKSPACE';
    static EXCLUDE_MEMBER_FROM_WORKSPACE: string = 'EXCLUDE_MEMBER_FROM_WORKSPACE';

    @dispatch()
    fetchWorkspaces = (member: IMember) => ({
        type: WorkspaceActions.FETCH_WORKSPACES,
        payload: member,
    })

    @dispatch()
    createWorkspace = (workspace: IWorkspace) => ({
        type: WorkspaceActions.CREATE_WORKSPACE,
        payload: workspace,
    })

    @dispatch()
    includeMemberToWorkspace = (member: IMember) => ({
        type: WorkspaceActions.INCLUDE_MEMBER_TO_WORKSPACE,
        payload: member,
    })

    @dispatch()
    excludeMemberFromWorkspace = (member: IMember) => ({
        type: WorkspaceActions.EXCLUDE_MEMBER_FROM_WORKSPACE,
        payload: member,
    })
}