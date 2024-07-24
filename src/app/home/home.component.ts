import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from 'src/app/housing-location/housing-location.component';
import { HousingLocation } from 'src/housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation] = "housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, HousingLocationComponent],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    if (this.filteredLocationList.length === 0 ) 
      this.filteredLocationList = this.housingLocationList;
  }

  // This funcion allows the search bar to filter by city
  filterResults(text: string) {
    // First, we'll check for blank text
    // This allows users to clear the search box and receive all housing locations
    if (!text) this.filteredLocationList = this.housingLocationList;

    // This is where we'll handle the filtering
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
