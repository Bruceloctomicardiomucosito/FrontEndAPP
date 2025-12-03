import { TestBed } from '@angular/core/testing';

import { NivelesEducativos } from './niveles-educativos';

describe('NivelesEducativos', () => {
  let service: NivelesEducativos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NivelesEducativos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
