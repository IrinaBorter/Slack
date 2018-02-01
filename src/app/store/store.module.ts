import { NgModule, Injectable } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { RootReducer } from './root-reducer';
import { RootEpic } from './root-epic';

interface IAppState {}

@NgModule({
    imports: [NgReduxModule],
    providers: [RootReducer, RootEpic],
})

@Injectable()
export class StoreModule {
    constructor(
        public store: NgRedux<IAppState>,
        public devTools: DevToolsExtension,
        private rootEpic: RootEpic,
        private rootReducer: RootReducer,
    ) {
        const epicMiddleware = this.rootEpic.createEpics();
        const reducer = this.rootReducer.createReducer();
        const devToolsEnabled = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

        store.configureStore(reducer, {}, [createLogger(), epicMiddleware], devToolsEnabled);
    }
}