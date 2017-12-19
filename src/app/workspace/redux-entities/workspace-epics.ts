import { createEpicMiddleware } from 'redux-observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { WorkspaceActions } from './workspace-actions';
import { of } from 'rxjs/observable/of';

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
                .switchMap((action: any) => {
                    return this.http.get(`/api/workspaces/member/${action.payload.memberId}`)
                        .map(response => response.json())
                        .map(response => this.actions.loadWorkspacesSucceeded(response))
                        .catch(() => of(this.actions.loadWorkspacesFailed(true)))
                        .startWith(this.actions.loadWorkspacesStarted());
                });
        };
    }
}
