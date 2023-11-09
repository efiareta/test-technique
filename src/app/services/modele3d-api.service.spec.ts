import { TestBed } from '@angular/core/testing';

import { Modele3dApiService } from './modele3d-api.service';
import { provideHttpClient } from '@angular/common/http';

describe('Modele3dApiService', () => {
  let service: Modele3dApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Modele3dApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
