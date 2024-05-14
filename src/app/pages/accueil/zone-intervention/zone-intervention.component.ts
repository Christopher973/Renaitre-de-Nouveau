import { Component } from '@angular/core';

@Component({
  selector: 'app-zone-intervention',
  templateUrl: './zone-intervention.component.html',
  styleUrl: './zone-intervention.component.css'
})
export class ZoneInterventionComponent {
  showFranceFrame: boolean = true;
  showBeninFrame: boolean = false;

  showFrance() {
    this.showFranceFrame = true;
    this.showBeninFrame = false;
  }

  showBenin() {
    this.showFranceFrame = false;
    this.showBeninFrame = true;
  }
}
