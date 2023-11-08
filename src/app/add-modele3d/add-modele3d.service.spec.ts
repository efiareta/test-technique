import { TestBed } from '@angular/core/testing';

import { AddModeleService } from './add-modele3d.service';

describe('DetailModeleService', () => {
  let service: AddModeleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddModeleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
