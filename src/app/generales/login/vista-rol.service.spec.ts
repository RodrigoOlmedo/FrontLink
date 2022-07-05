import { TestBed } from '@angular/core/testing';

import { VistaRolService } from './vista-rol.service';

describe('VistaRolService', () => {
  let service: VistaRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
