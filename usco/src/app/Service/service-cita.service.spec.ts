import { TestBed } from '@angular/core/testing';

import { ServiceCitaService } from './service-cita.service';

describe('ServiceCitaService', () => {
  let service: ServiceCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
