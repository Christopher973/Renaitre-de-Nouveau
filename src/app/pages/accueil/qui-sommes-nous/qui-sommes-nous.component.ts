import { Component } from '@angular/core';
import { initTWE } from 'tw-elements';

@Component({
  selector: 'app-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.component.html',
  styleUrl: './qui-sommes-nous.component.css'
})
export class QuiSommesNousComponent {
  ngOnInit(): void {
    initTWE({ lazyLoad: true });
  }
}
