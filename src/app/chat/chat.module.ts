import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatMessageInputComponent } from './chat-message-input/chat-message-input.component';
import { ChatMessageContainerComponent } from './chat-message-container/chat-message-container.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        ChatComponent,
        ChatHeaderComponent,
        ChatMessageInputComponent,
        ChatMessageContainerComponent,
        ChatMessageComponent,
    ],
    exports: [
        ChatComponent,
        ChatHeaderComponent,
        ChatMessageInputComponent,
        ChatMessageContainerComponent,
        ChatMessageComponent,
    ],
})

export class ChatModule {}