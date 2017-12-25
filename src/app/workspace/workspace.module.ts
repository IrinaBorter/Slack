import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { WorkspaceActions } from './redux-entities/workspace-actions';
import { WorkspacesEpic } from './redux-entities/workspace-epics';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceItemComponent } from './workspace-item/workspace-item.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        WorkspaceComponent,
        WorkspaceItemComponent,
    ],
    exports: [
        WorkspaceComponent,
    ],
    providers: [
        WorkspaceActions,
        WorkspacesEpic,
    ],
})

export class WorkspaceModule {}