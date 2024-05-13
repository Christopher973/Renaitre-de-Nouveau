import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AgirAvecNousComponent } from './components/agir-avec-nous/agir-avec-nous.component';
import { QuiSommesNousComponent } from './pages/accueil/qui-sommes-nous/qui-sommes-nous.component';
import { MissionsEtValeursComponent } from './pages/accueil/missions-et-valeurs/missions-et-valeurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AgirAvecNousComponent,
    QuiSommesNousComponent,
    MissionsEtValeursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
