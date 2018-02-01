import { Component } from '@angular/core';

import { ChatActions } from '../redux-entities/chat-actions';

@Component({
    selector: 'slack-chat-message-form',
    templateUrl: 'chat-message-form.component.html',
    styleUrls: ['chat-message-form.component.scss'],
})

export class ChatMessageFormComponent {
    model = { message: '' };

    constructor(
        private actions: ChatActions,
    ) {}

    onSubmit() {
        const message = {
            content: this.model.message,
            authorId: 1,
            time: new Date(),
            channelId: 1,
        };
        this.actions.pushMessage(message);
        this.model.message = '';
    }
}