import { WorkspaceActions } from './workspace-actions';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IWorkspace {}

const defaultWorkspaceState = { items:  [] as IWorkspace[], loading: false, error: false };

export default function workspacesReducer(state: IState = defaultWorkspaceState, action: Action<string, IWorkspace>) {
    switch (action.type) {
        case WorkspaceActions.CREATE_WORKSPACE: {
            return Object.assign({}, state, { items: action.payload });
        }

        case WorkspaceActions.INCLUDE_MEMBER_TO_WORKSPACE: {
            return Object.assign({}, state, { items: action.payload });
        }

        case WorkspaceActions.EXCLUDE_MEMBER_FROM_WORKSPACE: {
            return Object.assign({}, state, { items: action.payload });
        }

        default: {
            return state;
        }
    }
}