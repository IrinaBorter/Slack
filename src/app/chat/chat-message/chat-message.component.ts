import { Component, Input } from '@angular/core';

interface IMessage {}

@Component({
    selector: 'slack-message',
    templateUrl: 'chat-message.component.html',
    styleUrls: ['chat-message.component.scss'],
})

export class ChatMessageComponent {
    @Input() message: IMessage;
}