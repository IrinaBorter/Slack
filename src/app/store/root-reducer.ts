import { combineReducers } from 'redux';
import { composeReducers } from '@angular-redux/form';
import { Injectable } from '@angular/core';

import workspacesReducer from '../workspace/redux-entities/workspace-reducer';
import channelsReducer from '../channels-tab/redux-entities/channels-reducer';
import chatReducer from '../chat/redux-entities/chat-reducer';

@Injectable()
export class RootReducer {
    constructor() {}

    public createReducer() {
        return composeReducers(combineReducers({
            workspaces: workspacesReducer,
            channels: channelsReducer,
            messages: chatReducer,
        }));
    }
}