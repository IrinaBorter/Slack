import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

import { ChatModule } from './chat/chat.module';
import { ChannelsTabModule } from './channels-tab/channels-tab.module';

import { ChatModule } from './chat/chat.module';
import { ChannelsTabModule } from './channels-tab/channels-tab.module';

@NgModule({
    imports: [
        BrowserModule,
        ChatModule,
        ChannelsTabModule,
        NgReduxModule,
        StoreModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}