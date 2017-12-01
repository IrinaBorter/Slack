import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer } from '../reducers/rootReducer';

interface IAppState {}

@NgModule({
    imports: [NgReduxModule],
})

export class StoreModule {
    constructor(public store: NgRedux<IAppState>, devTools: DevToolsExtension) {
        store.configureStore(rootReducer, {}, [], devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}