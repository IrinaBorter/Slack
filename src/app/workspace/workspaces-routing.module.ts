import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelsTabComponent } from '../channels-tab/channels-tab.component';

const routes: Routes = [
    {
        path: ':workspaceId',
        component: ChannelsTabComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkspacesRoutingModule {}