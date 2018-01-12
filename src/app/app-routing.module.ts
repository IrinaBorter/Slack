import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsTabComponent } from './channels-tab/channels-tab.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'workspaces',
        pathMatch: 'full',
    },
    {
        path: 'workspaces',
        component: WorkspaceComponent,
        children: [
            {
                path: ':workspaceId',
                component: ChannelsTabComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}