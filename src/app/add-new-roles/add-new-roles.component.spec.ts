import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRolesComponent } from './add-new-roles.component';

describe('AddNewRolesComponent', () => {
  let component: AddNewRolesComponent;
  let fixture: ComponentFixture<AddNewRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
