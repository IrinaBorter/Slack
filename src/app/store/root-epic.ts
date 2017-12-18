import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

import { WorkspacesEpic } from '../workspace/redux-entities/workspace-epics';

@Injectable()
export class RootEpic {
    constructor(private workspacesEpics: WorkspacesEpic) {}

    public createEpics() {
        return combineEpics(this.workspacesEpics.createEpic());
    }
}