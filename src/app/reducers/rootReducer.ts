import { combineReducers } from 'redux';
import { composeReducers } from '@angular-redux/form';

import workspacesReducer from '../workspace/redux-entities/workspace-reducer';
import channelsReducer from './channelsReducer';
import membersReducer from './membersReducer';
import messagesReducer from './messagesReducer';

export const rootReducer = composeReducers(combineReducers({
    workspaces: workspacesReducer,
    channels: channelsReducer,
    members: membersReducer,
    messages: messagesReducer,
}));