import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCharacterDetailsComponent } from './display-character-details.component';

describe('DisplayCharacterDetailsComponent', () => {
  let component: DisplayCharacterDetailsComponent;
  let fixture: ComponentFixture<DisplayCharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
