import { Component, Input } from '@angular/core';

interface IWorkspace {
    name: string;
}

@Component({
    selector: 'slack-workspace-item',
    templateUrl: './workspace-item.component.html',
    styleUrls: ['./workspace-item.component.scss'],
})

export class WorkspaceItemComponent {
    @Input() workspace: IWorkspace;
    @Input() onWorkspaceClick: Function;

    public getWorkspaceName() {
        return this.workspace.name.split(' ').slice(0, 2).map(word => word[0]).join('-');
    }
}