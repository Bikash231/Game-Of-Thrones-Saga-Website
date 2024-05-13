import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Interfaces/Book'; // Importing the Book interface
import { BooksService } from 'src/app/services/book.service'; // Importing the BooksService
import { Router } from '@angular/router'; // Importing the Router

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  Books!: Book[]; // Array to hold books

  constructor(
    private bookService: BooksService, // Injecting the BooksService
    private router: Router // Injecting the Router
  ) { }

  ngOnInit(): void {
    this.getBooks(); // Calling the method to fetch books when the component initializes
  }

  // Method to fetch books from the service
  getBooks(): void {
    // Subscribing to the observable returned by the service to get books data
    this.bookService.getBooks().subscribe((data) => {
      this.Books = data; // Assigning the fetched books data to the 'Books' array
    });
  }

  // Method to navigate to the details page of a book
  onDetailsClick(url: string): void {
    // Navigating to the book details page and passing the book URL as state data
    this.router.navigate(['/book/details'], { state: { data: url } });
  }
}
