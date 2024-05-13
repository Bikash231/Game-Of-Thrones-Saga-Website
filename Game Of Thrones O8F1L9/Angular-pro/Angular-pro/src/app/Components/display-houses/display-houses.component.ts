import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/house.service';
import { House } from 'src/app/Interfaces/House';
import { Router } from '@angular/router';

// Define type for paginator event
type PaginatorEvent = {
  page: number;
};

@Component({
  selector: 'app-display-houses',
  templateUrl: './display-houses.component.html',
  styleUrls: ['./display-houses.component.css']
})
export class DisplayHousesComponent implements OnInit {
  houses!: House[]; // Array to store houses
  private currentPage = 1; // Current page number

  constructor(
    private houseService: HousesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHouses(); // Fetch houses on component initialization
  }

  // Method to fetch houses from the service
  getHouses(): void {
    this.houseService.getAllHouses(this.currentPage).subscribe((data) => {
      this.houses = data; // Assign fetched houses to the component property
    });
  }

  // Method to handle pagination
  paginate(event: PaginatorEvent): void {
    this.currentPage = event.page + 1; // Update current page number
    this.getHouses(); // Fetch houses for the new page
  }

  // Method to navigate to house details page
  onHouseClick(url: string): void {
    this.router.navigate(['house/details'], { state: { data: url } });
  }
}
