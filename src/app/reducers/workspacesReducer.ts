import { WorkspacesActions } from '../actions/workspaces';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IWorkspace {}

export default function workspacesReducer(state: IState[] = [], action: Action<string, IWorkspace>) {
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