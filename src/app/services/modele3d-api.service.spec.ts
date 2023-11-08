import { TestBed } from '@angular/core/testing';

import { Modele3dApiService } from './modele3d-api.service';

describe('Modele3dApiService', () => {
  let service: Modele3dApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modele3dApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
