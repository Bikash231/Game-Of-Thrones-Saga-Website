import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHousesComponent } from './display-houses.component';

describe('DisplayHousesComponent', () => {
  let component: DisplayHousesComponent;
  let fixture: ComponentFixture<DisplayHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHousesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
