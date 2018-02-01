import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ChatActions } from './redux-entities/chat-actions';

interface IMessage {}

@Component({
    selector: 'slack-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})

export class ChatComponent implements OnInit {
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
