import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { WorkspaceActions } from './redux-entities/workspace-actions';

interface IWorkspace {
    id: number;
    active: boolean;
}

@Component({
    selector: 'slack-workspaces-tab',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})

export class WorkspaceComponent implements OnInit {
    @select(['workspaces', 'items']) workspaces$: Observable<IWorkspace>[];

    constructor(
        private actions: WorkspaceActions,
    ) {}

    ngOnInit() {
        this.actions.fetchWorkspaces({ memberId: 1 });
    }
}