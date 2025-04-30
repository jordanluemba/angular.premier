import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from '../housinglocation';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, NgFor],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housinglocation of filteredLocationList" [housinglocation]="housinglocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housinglocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList:Housinglocation[] = []

  constructor() {
    this.housingService.getAllHousingLocations().then((housinglocationList: Housinglocation[]) => {
      this.housinglocationList = housinglocationList;
      this.filteredLocationList = housinglocationList;
    })
  }
  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housinglocationList;

    this.filteredLocationList = this.housinglocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
