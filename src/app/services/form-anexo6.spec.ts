import { TestBed } from '@angular/core/testing';

import { FormAnexo6 } from './form-anexo6';

describe('FormAnexo6', () => {
  let service: FormAnexo6;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAnexo6);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
