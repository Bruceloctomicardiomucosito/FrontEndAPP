import { TestBed } from '@angular/core/testing';

import { AsistenciaRemota } from './asistencia-remota';

describe('AsistenciaRemota', () => {
  let service: AsistenciaRemota;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsistenciaRemota);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
