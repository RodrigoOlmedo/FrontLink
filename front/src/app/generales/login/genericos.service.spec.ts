import { TestBed } from '@angular/core/testing';

import { GenericosService } from './genericos.service';

describe('GenericosService', () => {
  let service: GenericosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
