import { ActionReducerMap, createFeatureSelector, } from '@ngrx/store';
import * as fromCources from './cources/reducers/cources-reducer.reducer'
import * as fromUser from './cources/reducers/user.reducer'
import * as fromRouter from '@ngrx/router-store'
export interface State {
  [fromUser.reducerFeatureKey]: fromUser.StateUser;
  [fromCources.courcesReducerFeatureKey]: fromCources.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromUser.reducerFeatureKey]: fromUser.reducer,
  [fromCources.courcesReducerFeatureKey]: fromCources.reducer
};

export const selectRouterState = createFeatureSelector<fromRouter.RouterReducerState>('router');
export const { selectRouteParam } = fromRouter.getRouterSelectors(selectRouterState);