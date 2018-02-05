import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelsTabComponent } from './channels-tab/channels-tab.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ChatComponent } from './chat/chat.component';

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
                children: [
                    {
                        path: 'channels/:channelId',
                        component: ChatComponent,
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}