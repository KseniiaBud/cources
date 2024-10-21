import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CourcesEffectsEffects } from './cources-effects.effects';

describe('CourcesEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: CourcesEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourcesEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CourcesEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
