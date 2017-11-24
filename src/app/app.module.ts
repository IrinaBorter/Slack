import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChannelsTabComponent } from './channels-tab/channels-tab.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { ChatMessageInputComponent } from './chat/chat-message-input/chat-message-input.component';
import { ChatMessageContainerComponent } from './chat/chat-message-container/chat-message-container.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';

import { ChatModule } from './chat/chat.module';

@NgModule({
    imports: [
        BrowserModule,
        ChatModule,
    ],
    declarations: [
        AppComponent,
        ChannelsTabComponent,
        ChatComponent,
        ChatHeaderComponent,
        ChatMessageInputComponent,
        ChatMessageContainerComponent,
        ChatMessageComponent,
    ],
    bootstrap: [AppComponent],
})

export class AppModule {}