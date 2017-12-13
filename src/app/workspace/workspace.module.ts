import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceComponent } from './workspace.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        WorkspaceComponent,
    ],
    exports: [
        WorkspaceComponent,
    ],
})

export class WorkspaceModule {}