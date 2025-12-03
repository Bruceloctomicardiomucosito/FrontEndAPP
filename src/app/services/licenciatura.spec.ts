import { TestBed } from '@angular/core/testing';

import { Licenciatura } from './licenciatura';

describe('Licenciatura', () => {
  let service: Licenciatura;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Licenciatura);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
