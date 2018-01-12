import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ChannelsActions } from './channels-actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChannelsEpic {
    constructor(
        private http: Http,
        private actions: ChannelsActions,
    ) {}

    public createEpic() {
        return this.createWorkspacesEpic();
    }

    private createWorkspacesEpic() {
        return (action$: any) => {
            return action$.ofType(ChannelsActions.FETCH_CHANNELS)
                .switchMap((action: any) => {
                    return this.http.get(`/api/channels/workspace/${action.payload.workspaceId}`)
                        .map(response => response.json())
                        .map(response => this.actions.loadChannelsSucceeded(response))
                        .catch(() => of(this.actions.loadChannelsFailed(true)))
                        .startWith(this.actions.loadChannelsStarted());
                });
        };
    }
}
