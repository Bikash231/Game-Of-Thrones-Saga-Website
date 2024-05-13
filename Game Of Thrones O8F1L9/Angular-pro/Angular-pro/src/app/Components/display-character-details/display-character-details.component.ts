import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/Interfaces/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-display-character-details',
  templateUrl: './display-character-details.component.html',
  styleUrls: ['./display-character-details.component.css']
})
export class DisplayCharacterDetailsComponent implements OnInit {
  // Initialize variable to hold the URL data
  url = history.state.data;
  // Initialize variable to hold character data
  character!: Character;

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    // Call method to fetch character details when component initializes
    this.getCharacter();
  }

  // Method to fetch character details
  getCharacter() {
    // Extract character ID from URL
    var id = Number(this.url.split('/').pop());
    // Subscribe to character service to get character details
    this.characterService.getCharacter(id).subscribe((data) => (this.character = data));
  }

  // Method to navigate to character details
  onCharacterClick(url: string) {
    // Update URL data and fetch character details
    this.url = url;
    this.getCharacter();
  }

  // Method to navigate to house details
  onHouseClick(url: string) {
    this.router.navigate(['house/details'], { state: { data: url } });
  }

  // Method to navigate to book details
  onBookClick(url: string) {
    this.router.navigate(['book/details'], { state: { data: url } });
  }
}
