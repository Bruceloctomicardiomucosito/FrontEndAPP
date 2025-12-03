import { TestBed } from '@angular/core/testing';

import { AsignacionGruposAulas } from './asignacion-grupos-aulas';

describe('AsignacionGruposAulas', () => {
  let service: AsignacionGruposAulas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionGruposAulas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
