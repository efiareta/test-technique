import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModele3dComponent } from './add-modele3d.component';

describe('AddModele3dComponent', () => {
  let component: AddModele3dComponent;
  let fixture: ComponentFixture<AddModele3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddModele3dComponent]
    });
    fixture = TestBed.createComponent(AddModele3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
