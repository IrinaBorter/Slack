import { Injectable } from '@angular/core';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { WorkspacesEpic } from '../workspace/redux-entities/workspace-epics';
import { ChannelsEpic } from '../channels-tab/redux-entities/channels-epics';
import { ChatEpic, PushEpic } from '../chat/redux-entities/chat-epics';

@Injectable()
export class RootEpic {
    constructor(
        private workspacesEpics: WorkspacesEpic,
        private channelsEpics: ChannelsEpic,
        private chatEpics: ChatEpic,
        private pushEpic: PushEpic,
    ) {}

    public createEpics() {
        const combinedEpics = combineEpics(
            this.workspacesEpics.createEpic(),
            this.channelsEpics.createEpic(),
            this.chatEpics.createEpic(),
            this.pushEpic.createEpic(),
        );

        return createEpicMiddleware(combinedEpics);
    }
}