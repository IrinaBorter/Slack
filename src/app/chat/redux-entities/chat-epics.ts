import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ChatActions } from './chat-actions';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChatEpic {
    constructor(
        private http: Http,
        private actions: ChatActions,
    ) {}

    public createEpic() {
        return this.createChatEpic();
    }

    private createChatEpic() {
        return (action$: any) => {
            return action$.ofType(ChatActions.FETCH_MESSAGES)
                .switchMap((action: any) => {
                    return this.http.get(`/api/messages/channels/${action.payload.channelId}`)
                        .map(response => response.json())
                        .map(response => this.actions.loadMessagesSucceeded(response))
                        .catch(() => of(this.actions.loadMessagesFailed(true)))
                        .startWith(this.actions.loadMessagesStarted());
                });
        };
    }
}
