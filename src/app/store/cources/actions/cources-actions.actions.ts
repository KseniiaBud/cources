import { createAction, props } from '@ngrx/store';
import { ICource } from 'src/app/models/cources';


export const getCources = createAction('[Cource] Get Cources', props<{ params: { _page: number; _per_page: number; _sort: string; title?: string;} }>());
export const getCourcesSuccess = createAction('[Cource] Get Cources Success', props<{ cources: ICource[] }>());
export const getCourcesFailure = createAction('[Cource] Get Cources Failure', props<{ error: unknown }>());

export const getCourceById = createAction('[Cource] Get Cource By Id', props<{ id: string }>());
export const getCourceByIdSuccess = createAction('[Cource] Get Cource By Id Success', props<{ cource: ICource }>());
export const getCourceByIdFailure = createAction('[Cource] Get Cource By Id Failure', props<{ error: unknown }>());

export const createCource = createAction('[Cource] Create Cource', props<{ cource: ICource }>());
export const createCourceSuccess = createAction('[Cource] Create Cource Success', props<{ cource: ICource }>());
export const createCourceFailure = createAction('[Cource] Create Cource Failure', props<{ error: unknown }>());

export const updateCource = createAction('[Cource] Update Cource', props<{ id: number; cource: ICource }>());
export const updateCourceSuccess = createAction('[Cource] Update Cource Success', props<{ cource: ICource }>());
export const updateCourceFailure = createAction('[Cource] Update Cource Failure', props<{ error: unknown }>());

export const deleteCource = createAction('[Cource] Delete Cource', props<{ id: number }>());
export const deleteCourceSuccess = createAction('[Cource] Delete Cource Success', props<{ id: number }>());
export const deleteCourceFailure = createAction('[Cource] Delete Cource Failure', props<{ error: unknown }>());