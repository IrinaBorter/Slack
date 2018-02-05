import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsTabComponent } from './channels-tab.component';
import { ChannelsActions } from './redux-entities/channels-actions';
import { ChannelsEpic } from './redux-entities/channels-epics';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
    ],
    declarations: [
        ChannelsTabComponent
    ],
    exports: [
        ChannelsTabComponent
    ],
    providers: [
        ChannelsActions,
        ChannelsEpic,
    ],
})

export class ChannelsTabModule {}