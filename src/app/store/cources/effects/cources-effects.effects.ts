import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromCourcesActions from '../actions/cources-actions.actions'
import { CourcesService } from 'src/app/services/cources.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ICource } from 'src/app/models/cources';
import { Router } from '@angular/router';


@Injectable()
export class CourcesEffects {
  public getCources$ = createEffect(() => this.actions$.pipe(
    ofType(fromCourcesActions.getCources),
    switchMap(({ params }) => this.courceService.getCources(params).pipe(
      map((cources) => fromCourcesActions.getCourcesSuccess({ cources: cources.data as ICource[] }),
        catchError((error) => of(fromCourcesActions.getCourcesFailure({ error })))
      ))
    )));

  public getCourceById$ = createEffect(() => this.actions$.pipe(
    ofType(fromCourcesActions.getCourceById),
    switchMap(({ id }) => this.courceService.getCourceById(id).pipe(
      map((cource) => fromCourcesActions.getCourceByIdSuccess({ cource })),
      catchError((error) => of(fromCourcesActions.getCourceByIdFailure({ error })))
    ))
  ));


  createCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourcesActions.createCource),
      switchMap(({ cource }) => this.courceService.createCource(cource).pipe(
        map((cource) => fromCourcesActions.createCourceSuccess({ cource })),
        tap(() => { this.router.navigate(['/cources']); }),
        catchError((error) => of(fromCourcesActions.createCourceFailure({ error }))),
      ),
      ),
    ),
  );

  updateCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourcesActions.updateCource),
      switchMap(({ cource }) => this.courceService.updateCource(cource).pipe(
        map((cource) => fromCourcesActions.updateCourceSuccess({ cource })),
        tap(() => { this.router.navigate(['/cources']) }),
        catchError((error) => of(fromCourcesActions.updateCourceFailure({ error }))),
      ),
      ),
    ),
  );

  deleteCource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCourcesActions.deleteCource),
      switchMap(({ id }) => this.courceService.deleteCource(id).pipe(
        map(() => fromCourcesActions.deleteCourceSuccess({ id })),
        tap(() => { this.router.navigate(['/cources']) }),
        catchError((error) => of(fromCourcesActions.deleteCourceFailure({ error }))),
      ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private readonly courceService: CourcesService,
    private readonly router: Router
  ) { }
}
