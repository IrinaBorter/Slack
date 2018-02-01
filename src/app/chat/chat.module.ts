import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChatComponent } from './chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatMessageFormComponent } from './chat-message-form/chat-message-form.component';
import { ChatMessageContainerComponent } from './chat-message-container/chat-message-container.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

import { ChatActions } from './redux-entities/chat-actions';
import { ChatEpic, PushEpic } from './redux-entities/chat-epics';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ChatComponent,
        ChatHeaderComponent,
        ChatMessageFormComponent,
        ChatMessageContainerComponent,
        ChatMessageComponent,
    ],
    exports: [
        ChatComponent,
        ChatHeaderComponent,
        ChatMessageFormComponent,
        ChatMessageContainerComponent,
        ChatMessageComponent,
    ],
    providers: [
        ChatActions,
        ChatEpic,
        PushEpic,
    ],
})

export class ChatModule {}