import { TestBed } from '@angular/core/testing';

import { ServiceConsultorioService } from './service-consultorio.service';

describe('ServiceConsultorioService', () => {
  let service: ServiceConsultorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceConsultorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
