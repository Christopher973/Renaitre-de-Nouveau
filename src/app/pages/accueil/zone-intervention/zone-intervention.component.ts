import { Component } from '@angular/core';

@Component({
  selector: 'app-zone-intervention',
  templateUrl: './zone-intervention.component.html',
  styleUrl: './zone-intervention.component.css'
})
export class ZoneInterventionComponent {
  showWorldFrame: boolean = true;
  showFranceFrame: boolean = false;
  showBeninFrame: boolean = false;

  showWorld() {
    this.showWorldFrame = true;
    this.showFranceFrame = false;
    this.showBeninFrame = false;
  }

  showFrance() {
    this.showWorldFrame = false;
    this.showFranceFrame = true;
    this.showBeninFrame = false;
  }

  showBenin() {
    this.showWorldFrame = false;
    this.showFranceFrame = false;
    this.showBeninFrame = true;
  }
}
