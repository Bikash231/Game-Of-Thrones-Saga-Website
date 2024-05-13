import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayBookComponent } from './display-book.component';

describe('DisplayBookComponent', () => {
  let component: DisplayBookComponent;
  let fixture: ComponentFixture<DisplayBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBookComponent ] // Declaring the component to be tested
    })
    .compileComponents(); // Compiling the component's template and styles
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBookComponent); // Creating an instance of the component
    component = fixture.componentInstance; // Getting a reference to the component instance
    fixture.detectChanges(); // Detecting changes in the component
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Asserting that the component instance exists
  });
});
