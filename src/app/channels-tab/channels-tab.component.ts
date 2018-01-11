import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select } from '@angular-redux/store';

import { ChannelsActions } from './redux-entities/channels-actions';
import { Observable } from 'rxjs';

interface IChannel {}

@Component({
    selector: 'slack-channels-tab',
    templateUrl: './channels-tab.component.html',
    styleUrls: ['./channels-tab.component.scss'],
})

export class ChannelsTabComponent implements OnInit {
    @select(['channels', 'items']) channels$: Observable<IChannel>[];

    constructor(
        private route: ActivatedRoute,
        private actions: ChannelsActions,
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            const workspaceId = parseInt(params['workspaceId'], 10);
            this.actions.fetchChannels({ workspaceId });
        });
    }
}