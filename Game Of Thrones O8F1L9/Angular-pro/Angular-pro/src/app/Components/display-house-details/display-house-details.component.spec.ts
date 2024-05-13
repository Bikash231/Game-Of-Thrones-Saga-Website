import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHouseDetailsComponent } from './display-house-details.component';

describe('DisplayHouseDetailsComponent', () => {
  let component: DisplayHouseDetailsComponent;
  let fixture: ComponentFixture<DisplayHouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHouseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
