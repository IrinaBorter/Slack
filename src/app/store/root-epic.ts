import { combineEpics } from 'redux-observable';

import { fetchWorkspacesEpic } from '../workspace/redux-entities/workspace-epics';

export const rootEpic = combineEpics(fetchWorkspacesEpic);