import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie-photos',
  templateUrl: './galerie-photos.component.html',
  styleUrl: './galerie-photos.component.css'
})
export class GaleriePhotosComponent implements OnInit {
  photos: string[] = [];

  ngOnInit(): void {
    // Ajoutez ici le code pour charger les noms de vos photos dans le tableau
    for (let i = 1; i <= 30; i++) {
      this.photos.push(`galerie-photo${i}.png`);
    }
  }
}
