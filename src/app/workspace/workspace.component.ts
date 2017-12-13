import { Component, Injectable, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';

import { WorkspaceActions } from './redux-entities/workspace-actions';

@Component({
    selector: 'slack-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})

@Injectable()
export class WorkspaceComponent implements OnInit {
    @select('workspaces') workspaces$: any;

    constructor(private actions: WorkspaceActions) {}

    ngOnInit() {
        this.actions.fetchWorkspaces(1);
    }
}