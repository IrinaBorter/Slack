import { NgModule, Injectable } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/rootReducer';
import { RootEpic } from './root-epic';

interface IAppState {}

@NgModule({
    imports: [NgReduxModule],
    providers: [RootEpic],
})

@Injectable()
export class StoreModule {
    constructor(
        public store: NgRedux<IAppState>,
        public devTools: DevToolsExtension,
        private rootEpic: RootEpic,
    ) {
        const epicMiddleware = this.rootEpic.createEpics();
        const devToolsEnabled = devTools.isEnabled() ? [ devTools.enhancer() ] : [];

        store.configureStore(rootReducer, {}, [createLogger(), epicMiddleware], devToolsEnabled);
    }
}