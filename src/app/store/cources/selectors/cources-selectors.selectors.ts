import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCources from '../reducers/cources-reducer.reducer';

export const selectCourcesState = createFeatureSelector<fromCources.State>(fromCources.courcesReducerFeatureKey);

export const selectIsCourcesLoading = createSelector(
    selectCourcesState,
    (state) => state.isLoading
);

export const selectCources = createSelector(
    selectCourcesState,
    (state) => state.cources
);

export const selectCource = createSelector(
    selectCourcesState,
    (state) => state.cource
);

export const selectCourcesCount = createSelector(
    selectCources,
    (state) => state.length
);