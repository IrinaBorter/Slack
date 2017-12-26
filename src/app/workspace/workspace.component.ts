import { Component, Injectable, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ActivatedRoute, Params } from '@angular/router';

import { WorkspaceActions } from './redux-entities/workspace-actions';

interface IWorkspace {
    id: number,
    active: boolean,
}

@Component({
    selector: 'slack-workspaces-tab',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})

@Injectable()
export class WorkspaceComponent implements OnInit {
    @select(['workspaces', 'items']) workspaces$: IWorkspace[];

    constructor(
        private actions: WorkspaceActions,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.actions.fetchWorkspaces({ memberId: 1 });

        this.route.params.subscribe((params: Params) => {
            const workspaceId = parseInt(params['workspaceId'], 10);
            this.workspaces$.forEach(workspace => {
                workspace.active = workspace.id === workspaceId;
            });
        });
    }

    onWorkspaceClick(selectedWorkspace: IWorkspace) {
        this.workspaces$.forEach(workspace => {
            workspace.active = workspace === selectedWorkspace;
        });
    }
}