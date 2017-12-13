import { NgModule } from '@angular/core';
import { createEpicMiddleware } from 'redux-observable';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer } from '../reducers/rootReducer';
import { rootEpic } from './root-epic';

interface IAppState {}

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = [epicMiddleware];

@NgModule({
    imports: [NgReduxModule],
})

export class StoreModule {
    constructor(public store: NgRedux<IAppState>, devTools: DevToolsExtension) {
        store.configureStore(rootReducer, {}, middlewares, devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}