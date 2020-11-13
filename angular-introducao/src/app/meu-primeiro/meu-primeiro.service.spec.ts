import { TestBed } from '@angular/core/testing';

import { MeuPrimeiroService } from './meu-primeiro.service';

describe('MeuPrimeiroService', () => {
  let service: MeuPrimeiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuPrimeiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
