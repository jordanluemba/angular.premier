import { Component, Input } from '@angular/core';
import {  Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housinglocation.photo" alt="Photo de {{housinglocation.name}}">
      <h2 class="listing-heading" >{{housinglocation.name}}</h2>
      <p class="listing-location">{{ housinglocation.city }}, {{housinglocation.states}}</p>
      <a [routerLink]="['/details', housinglocation.id]">Voir plus</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housinglocation!:Housinglocation;


}
