import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

import { ChatActions } from '../redux-entities/chat-actions';

interface IMessage {}

@Component({
    selector: 'slack-chat-message-container',
    templateUrl: 'chat-message-container.component.html',
    styleUrls: ['chat-message-container.component.scss'],
})

export class ChatMessageContainerComponent implements OnInit {
    @select(['messages', 'items']) messages$: Observable<IMessage>[];

    constructor(
        private route: ActivatedRoute,
        private actions: ChatActions,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const channelId = parseInt(params['channelId'], 10);
            this.actions.fetchMessages({ channelId });
        });
    }
}
