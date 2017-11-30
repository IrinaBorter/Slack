import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChatModule } from './chat/chat.module';
import { ChannelsTabModule } from './channels-tab/channels-tab.module';

@NgModule({
    imports: [
        BrowserModule,
        ChatModule,
        ChannelsTabModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}