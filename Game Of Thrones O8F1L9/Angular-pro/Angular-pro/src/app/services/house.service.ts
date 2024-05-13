import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { House } from '../Interfaces/House';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private apiUrl = 'https://anapioficeandfire.com/api/houses';
  private pageSize = 20;

  constructor(private http: HttpClient) { }

  // Method to fetch all houses on a specific page
  getAllHouses(pageNumber: number): Observable<House[]> {
    const url = `${this.apiUrl}?page=${pageNumber || 1}&pageSize=${this.pageSize}`;
    return this.http.get<House[]>(url);
  }

  // Method to fetch a specific house by ID from the API
  getHouse(id: number): Observable<House> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<House>(url).pipe(
      map((house, index) => {
        const houseId = house.url.split('/').pop() || `${index}`;
        return { ...house, id: houseId };
      })
    );
  }
}
