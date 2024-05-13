import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/Interfaces/Character';

// Define the shape of the paginator event
type PaginatorEvent = {
  page: number;
};

@Component({
  selector: 'app-display-characters',
  templateUrl: './display-characters.component.html',
  styleUrls: ['./display-characters.component.css']
})
export class DisplayCharactersComponent implements OnInit {
  private currentPage = 1; // Track the current page number
  characters: Character[] = []; // Array to store characters

  constructor(private characterService: CharacterService, private router: Router) { } // Inject Router here

  ngOnInit(): void {
    this.getCharacters(); // Fetch characters when component initializes
  }

  // Fetch characters from the service
  getCharacters(): void {
    this.characterService.getAllCharacters(this.currentPage).subscribe((data: Character[]) => {
      // Filter characters that have a non-empty name field
      this.characters = data.filter(character => character.name && character.name.trim() !== '');
    });
  }

  // Handle pagination event
  paginate(event: PaginatorEvent): void {
    this.currentPage = event.page + 1; // Update current page number
    this.getCharacters(); // Fetch characters for the new page
  }

  // Navigate to character details page when a character is clicked
  onCharacterClick(character: Character): void {
    this.router.navigate(['character/details'], { state: { data: character.url } });
  }
}
