import { createEpicMiddleware } from 'redux-observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WorkspaceActions } from './workspace-actions';

@Injectable()
export class WorkspacesEpic {
    constructor(
        private http: Http,
        private actions: WorkspaceActions,
    ) {}

    public createEpic() {
        return createEpicMiddleware(this.createWorkspacesEpic());
    }

    private createWorkspacesEpic() {
        return (action$: any) => {
            return action$.ofType(WorkspaceActions.FETCH_WORKSPACES)
                .mergeMap((action: any) => {
                    return this.http.get(`/api/workspaces/member/:${action.payload.id}`)
                        .map(response => response.json())
                        .map(response => this.actions.fetchWorkspaces(response));
                });
        };
    }
}
