import { TestBed } from '@angular/core/testing';

import { NomeDoServiçoService } from './nome-do-serviço.service';

describe('NomeDoServiçoService', () => {
  let service: NomeDoServiçoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomeDoServiçoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
