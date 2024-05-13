import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Character } from '../Interfaces/Character';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl = 'https://www.anapioficeandfire.com/api/characters';
  private pageSize = 20; // Sets 20 characters per page
  
  constructor(private http: HttpClient) {}

  // Method to fetch all characters on a specific page
  getAllCharacters(pageNumber: number): Observable<Character[]> {
    const url = `${this.charactersUrl}?page=${pageNumber || 1}&pageSize=${this.pageSize}`;
    return this.http.get<Character[]>(url);
  }

  // Method to fetch a specific character by ID from the API
  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url).pipe(
      map((character, index) => {
        const characterId = character.url.split('/').pop() || `${index}`;
        return { ...character, id: characterId };
      })
    );
  }
}
