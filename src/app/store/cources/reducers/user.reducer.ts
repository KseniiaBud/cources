import { createReducer, on } from '@ngrx/store';
import * as fromUserActions from '../actions/user.actions';
import { IUser } from 'src/app/models/userAuth';

export const reducerFeatureKey = 'users';

export interface StateUser {
  users: IUser[];
  error: unknown | null;
}

export const initialState: StateUser = {
  users: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(fromUserActions.userLogin, fromUserActions.userLogout, (state) => ({ ...state })),
  on(fromUserActions.userLoginSuccess, (state, { users }) => ({ ...state, users })),
  on(fromUserActions.userLoginFailure, (state, { error }) => ({ ...state, error })),
  on(fromUserActions.userGetInfo, (state) => ({ ...state })),
  on(fromUserActions.userGetInfoSuccess, (state, { users }) => ({ ...state, users })),
  on(fromUserActions.userGetInfoFailure, (state, { error }) => ({ ...state, error })),
);