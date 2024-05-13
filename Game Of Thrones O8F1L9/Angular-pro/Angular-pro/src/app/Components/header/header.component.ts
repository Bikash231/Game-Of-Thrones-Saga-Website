import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  // Method to navigate to the characters page
  onCharacterClick()
  {
    this.router.navigate(['/character'])
  }
  // Method to navigate to the books page
  onBookClick(){
    this.router.navigate(['/books'])
  }
  // Method to navigate to the houses page
  onHouseClick()
  {
    this.router.navigate(['/houses'])
  }
    // Method to navigate to the books page when clicking on the logo
    onLogoClick() {
      this.router.navigate(['/books']); 
    }
}
