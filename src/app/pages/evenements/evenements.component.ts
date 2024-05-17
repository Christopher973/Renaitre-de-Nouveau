import { Component } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css'
})
export class EvenementsComponent {
  ngOnInit() {
    initTWE({ Tooltip });
  }
}
