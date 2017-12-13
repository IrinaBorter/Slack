import { ActionsObservable } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

import { WorkspaceActions } from './workspace-actions';

const fetchWorkspacesEpic = (action$: ActionsObservable<any>) => {
    return action$.ofType(WorkspaceActions.FETCH_WORKSPACES)
        .mergeMap((action) => {
            return ajax.getJSON(`/api/workspaces/member/:${action.payload.id}`)
                .map(response => ({ type: WorkspaceActions.FETCH_WORKSPACES, payload: response }));
        });
};

export { fetchWorkspacesEpic };