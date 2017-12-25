import { WorkspaceActions } from './workspace-actions';
import { FluxStandardAction as Action } from 'flux-standard-action';

interface IState {}
interface IWorkspace {}

const defaultWorkspaceState = { items:  [] as IWorkspace[], loading: false, error: false };

export default function workspacesReducer(state: IState = defaultWorkspaceState, action: Action<string, IWorkspace>) {
    switch (action.type) {
        case WorkspaceActions.LOAD_WORKSPACES_STARTED: {
            return { ...state, loading: true };
        }

        case WorkspaceActions.LOAD_WORKSPACES_SUCCEEDED: {
            return { ...state, items: action.payload, loading: false };
        }

        case WorkspaceActions.LOAD_WORKSPACES_FAILED: {
            return { ...state, error: action.error, loading: false };
        }

        case WorkspaceActions.CREATE_WORKSPACE: {
            return { ...state, items: action.payload };
        }

        case WorkspaceActions.INCLUDE_MEMBER_TO_WORKSPACE: {
            return { ...state, items: action.payload };
        }

        case WorkspaceActions.EXCLUDE_MEMBER_FROM_WORKSPACE: {
            return { ...state, items: action.payload };
        }

        default: {
            return state;
        }
    }
}