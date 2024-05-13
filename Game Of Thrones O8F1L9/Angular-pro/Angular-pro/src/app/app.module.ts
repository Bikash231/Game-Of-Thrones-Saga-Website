import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to process HTTP requests
import { Routes, RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator'; // Import PaginatorModule for pagination functionality
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { DisplayBookComponent } from './Components/display-book/display-book.component';
import { DisplayCharactersComponent } from './Components/display-characters/display-characters.component';
import { DisplayHousesComponent } from './Components/display-houses/display-houses.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayBookDetailsComponent } from './Components/display-book-details/display-book-details.component';
import { DisplayCharacterDetailsComponent } from './Components/display-character-details/display-character-details.component';
import { DisplayHouseDetailsComponent } from './Components/display-house-details/display-house-details.component';

// Define the routes for navigation
const appRoutes: Routes = [
  { path: '', component: DisplayBookComponent },
  { path: 'character', component: DisplayCharactersComponent },
  { path: 'books', component: DisplayBookComponent },
  { path: 'houses', component: DisplayHousesComponent },
  { path: 'book/details', component: DisplayBookDetailsComponent },
  { path: 'character/details', component: DisplayCharacterDetailsComponent },
  { path: 'house/details', component: DisplayHouseDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayBookComponent,
    DisplayCharactersComponent,
    DisplayHousesComponent,
    HeaderComponent,
    DisplayBookDetailsComponent,
    DisplayCharacterDetailsComponent,
    DisplayHouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), // Configure the router module with the defined routes
    PaginatorModule,
    ScrollingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
