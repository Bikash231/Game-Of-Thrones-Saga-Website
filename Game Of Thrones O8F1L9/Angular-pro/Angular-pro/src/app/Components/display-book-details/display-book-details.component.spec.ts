import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBookDetailsComponent } from './display-book-details.component';

describe('DisplayBookDetailsComponent', () => {
  let component: DisplayBookDetailsComponent;
  let fixture: ComponentFixture<DisplayBookDetailsComponent>;

  beforeEach(async () => {
    // Configure TestBed before each test
    await TestBed.configureTestingModule({
      declarations: [ DisplayBookDetailsComponent ]
    }).compileComponents(); // Compile the component's template and CSS
  });

  beforeEach(() => {
    // Create a new instance of the component fixture
    fixture = TestBed.createComponent(DisplayBookDetailsComponent);
    // Extract the component instance
    component = fixture.componentInstance;
    // Trigger change detection
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance is created successfully
    expect(component).toBeTruthy();
  });
});
