import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Book } from '../Interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private booksUrl = 'https://anapioficeandfire.com/api/books';

  constructor(private http: HttpClient) { }

  // Method to fetch all books from the API
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
  
  // Method to fetch a specific book by ID from the API
  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      map((book) => {
        return { ...book };
      })
    );
  }
}
