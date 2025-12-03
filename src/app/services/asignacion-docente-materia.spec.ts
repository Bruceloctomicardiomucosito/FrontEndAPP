import { TestBed } from '@angular/core/testing';

import { AsignacionDocenteMateria } from './asignacion-docente-materia';

describe('AsignacionDocenteMateria', () => {
  let service: AsignacionDocenteMateria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionDocenteMateria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
