import { Component, Injectable, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

import { WorkspaceActions } from './redux-entities/workspace-actions';

interface IWorkspace {}

@Component({
    selector: 'slack-workspaces-tab',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})

@Injectable()
export class WorkspaceComponent implements OnInit {
    @select(['workspaces', 'items']) workspaces$: IWorkspace[];

    constructor(private actions: WorkspaceActions) {}

    ngOnInit() {
        this.actions.fetchWorkspaces({ memberId: 1 });
    }
}