import { WorkspacesActions } from '../actions/workspaces';
// import { Action } from 'redux';

type Action = { type: string, payload: any };
interface IState {}

export default function workspacesReducer(state: IState[] = [], action: Action) {
    switch (action.type) {
        case WorkspacesActions.CREATE_WORKSPACE: {
            return [action.payload];
        }

        case WorkspacesActions.INCLUDE_MEMBER_TO_WORKSPACE: {
            return [action.payload];
        }

        case WorkspacesActions.EXCLUDE_MEMBER_FROM_WORKSPACE: {
            return [action.payload];
        }

        default: {
            return state;
        }
    }
}