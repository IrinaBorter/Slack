import { Injectable } from '@angular/core';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { WorkspacesEpic } from '../workspace/redux-entities/workspace-epics';
import { ChannelsEpic } from '../channels-tab/redux-entities/channels-epics';

@Injectable()
export class RootEpic {
    constructor(
        private workspacesEpics: WorkspacesEpic,
        private channelsEpics: ChannelsEpic,
    ) {}

    public createEpics() {
        const combinedEpics = combineEpics(
            this.workspacesEpics.createEpic(),
            this.channelsEpics.createEpic(),
        );

        return createEpicMiddleware(combinedEpics);
    }
}