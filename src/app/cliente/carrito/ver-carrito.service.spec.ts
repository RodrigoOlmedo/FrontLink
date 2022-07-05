import { TestBed } from '@angular/core/testing';

import { VerCarritoService } from './ver-carrito.service';

describe('VerCarritoService', () => {
  let service: VerCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
