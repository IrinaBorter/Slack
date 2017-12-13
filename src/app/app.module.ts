import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

import { ChatModule } from './chat/chat.module';
import { ChannelsTabModule } from './channels-tab/channels-tab.module';

import { WorkspaceModule } from './workspace/workspace.module';

@NgModule({
    imports: [
        BrowserModule,
        ChatModule,
        ChannelsTabModule,
        NgReduxModule,
        StoreModule,
        WorkspaceModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}