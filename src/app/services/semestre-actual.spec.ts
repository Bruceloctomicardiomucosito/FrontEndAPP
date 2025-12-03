import { TestBed } from '@angular/core/testing';

import { SemestreActual } from './semestre-actual';

describe('SemestreActual', () => {
  let service: SemestreActual;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemestreActual);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
