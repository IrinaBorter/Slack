import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

interface IWorkspace {
    name: string;
}

@Component({
    selector: 'slack-workspace-item',
    templateUrl: './workspace-item.component.html',
    styleUrls: ['./workspace-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class WorkspaceItemComponent {
    @Input() workspace: IWorkspace;

    public getWorkspaceName() {
        return this.workspace.name.split(' ').slice(0, 2).map(word => word[0]).join('-');
    }
}