import { NgModule, Injectable } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
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
        store.configureStore(rootReducer, {}, [epicMiddleware], devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}