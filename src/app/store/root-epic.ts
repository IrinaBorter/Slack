import { Injectable } from '@angular/core';

import { WorkspacesEpic } from '../workspace/redux-entities/workspace-epics';

@Injectable()
export class RootEpic {
    constructor(private workspacesEpics: WorkspacesEpic) {}

    public createEpics() {
        return this.workspacesEpics.createEpic();
    }
}