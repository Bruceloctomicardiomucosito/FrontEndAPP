import { TestBed } from '@angular/core/testing';

import { AsignacionPracticantes } from './asignacion-practicantes';

describe('AsignacionPracticantes', () => {
  let service: AsignacionPracticantes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionPracticantes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
