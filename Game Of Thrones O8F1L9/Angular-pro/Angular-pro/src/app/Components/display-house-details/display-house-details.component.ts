import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/Interfaces/House';
import { HousesService } from 'src/app/services/house.service';

@Component({
  selector: 'app-display-house-details',
  templateUrl: './display-house-details.component.html',
  styleUrls: ['./display-house-details.component.css']
})
export class DisplayHouseDetailsComponent implements OnInit {
  // Initialize variable to hold the incoming state data from history
  url = history.state.data;
  // Define variable to store house details
  house!: House;

  constructor(private houseService: HousesService, private router: Router) { }

  ngOnInit(): void {
    // Call the method to fetch house details when component initializes
    this.getHouse();
  }

  // Method to fetch house details from the API
  getHouse() {
    // Extract the house ID from the URL
    var id = Number(this.url.split('/').pop())
    // Subscribe to the service method to fetch house details
    this.houseService.getHouse(id).subscribe((data) => (this.house = data))
  }

  // Method to navigate to character details page
  onCharacterClick(url: string) {
    this.router.navigate(['/character/details'], { state: { data: url } })
  }

  // Method to handle click event for house navigation
  onHouseClick(url: string) {
    // Update the URL and fetch house details
    this.url = url;
    this.getHouse();
  }
}
