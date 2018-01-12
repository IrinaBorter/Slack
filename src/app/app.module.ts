import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';

import { ChatModule } from './chat/chat.module';
import { ChannelsTabModule } from './channels-tab/channels-tab.module';

import { WorkspaceModule } from './workspace/workspace.module';

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        ChatModule,
        ChannelsTabModule,
        NgReduxModule,
        StoreModule,
        WorkspaceModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}