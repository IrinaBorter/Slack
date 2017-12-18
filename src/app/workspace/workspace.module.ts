import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { WorkspaceActions } from './redux-entities/workspace-actions';
import { WorkspacesEpic } from './redux-entities/workspace-epics';
import { WorkspaceComponent } from './workspace.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
    ],
    declarations: [
        WorkspaceComponent,
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