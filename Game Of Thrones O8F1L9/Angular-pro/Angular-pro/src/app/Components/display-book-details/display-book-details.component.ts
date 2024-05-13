import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/book.service';
import { Book } from 'src/app/Interfaces/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-book-details',
  templateUrl: './display-book-details.component.html',
  styleUrls: ['./display-book-details.component.css']
})
export class DisplayBookDetailsComponent implements OnInit {
  // URL received from the previous component
  url = history.state.data;
  // Variable to hold the book details
  book!: Book;

  constructor(private bookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    // Call function to fetch book details when component initializes
    this.getBook();
  }

  // Function to fetch book details
  getBook() {
    // Extracting book ID from the URL
    const id = Number(this.url.split('/').pop());
    // Calling the book service to get book details
    this.bookService.getBook(id).subscribe((data) => (this.book = data));
  }

  // Function to navigate to character details page
  onCharacterClick(url: string) {
    this.router.navigate(['/character/details'], { state: { data: url } });
  }
}
