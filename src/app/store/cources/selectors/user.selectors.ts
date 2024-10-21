import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const selectUsersState = createFeatureSelector<fromUser.StateUser>(fromUser.reducerFeatureKey);

export const selectUsers = createSelector(selectUsersState, (state) => state.users);