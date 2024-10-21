import { createReducer, on } from '@ngrx/store';
import * as fromCourcesActions from '../actions/cources-actions.actions';
import { ICource, IRequest } from 'src/app/models/cources';

export const courcesReducerFeatureKey = 'courcesReducer';

export interface State {
  isLoading: boolean,
  params: IRequest,
  cource: ICource,
  cources: ICource[],
  courceId: number | null
}

export const initialState: State = {
  isLoading: false,
  params: {},
  cources: [],
  courceId: null,
  cource: {
    id: 0,
    title: '',
    topRated: false,
    creationDate: new Date,
    duration: 0,
    description: ''
  }
};

export const reducer = createReducer(
  initialState,
  on(fromCourcesActions.getCources, (state, { params }) => ({ ...state, params, isLoading: true })),
  on(fromCourcesActions.getCourcesSuccess, (state, { cources }) => ({ ...state, cources, isLoading: false })),
  on(fromCourcesActions.getCourcesFailure, (state, { error }) => ({ ...state, error, isLoading: false })),

  on(fromCourcesActions.getCourceById, (state, { id }) => ({ ...state, id })),
  on(fromCourcesActions.getCourceByIdSuccess, (state, { cource }) => ({ ...state, cource })),
  on(fromCourcesActions.getCourceByIdFailure, (state, { error }) => ({ ...state, error })),

  on(fromCourcesActions.createCource, (state) => ({ ...state })),
  on(fromCourcesActions.createCourceSuccess, (state, { cource }) => ({ ...state, cource })),
  on(fromCourcesActions.createCourceFailure, (state, { error }) => ({ ...state, error })),

  on(fromCourcesActions.updateCource, (state) => ({ ...state })),
  on(fromCourcesActions.updateCourceSuccess, (state, { cource }) => ({ ...state, cource })),
  on(fromCourcesActions.updateCourceFailure, (state, { error }) => ({ ...state, error })),

  on(fromCourcesActions.deleteCource, (state) => ({ ...state })),
  on(fromCourcesActions.deleteCourceSuccess, (state) => ({ ...state })),
  on(fromCourcesActions.deleteCourceFailure, (state, { error }) => ({ ...state, error })),

);

