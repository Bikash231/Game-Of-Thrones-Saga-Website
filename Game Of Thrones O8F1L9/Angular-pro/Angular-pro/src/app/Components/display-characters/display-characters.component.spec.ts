import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCharactersComponent } from './display-characters.component';

describe('DisplayCharactersComponent', () => {
  let component: DisplayCharactersComponent;
  let fixture: ComponentFixture<DisplayCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharactersComponent ] // Declare the component under test
    })
    .compileComponents(); // Compile the component's template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCharactersComponent); // Create a component fixture
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger change detection to initialize the component
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component instance to be truthy
  });
});
