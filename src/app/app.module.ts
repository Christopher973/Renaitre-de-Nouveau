import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AgirAvecNousComponent } from './components/agir-avec-nous/agir-avec-nous.component';
import { QuiSommesNousComponent } from './pages/accueil/qui-sommes-nous/qui-sommes-nous.component';
import { MissionsEtValeursComponent } from './pages/accueil/missions-et-valeurs/missions-et-valeurs.component';
import { CharteComponent } from './pages/accueil/charte/charte.component';
import { ZoneInterventionComponent } from './pages/accueil/zone-intervention/zone-intervention.component';
import { EducationComponent } from './pages/actions-projets/education/education.component';
import { FormationComponent } from './pages/actions-projets/formation/formation.component';
import { HeaderComponent } from './components/header/header.component';
import { SanteComponent } from './pages/actions-projets/sante/sante.component';
import { SecuriteComponent } from './pages/actions-projets/securite/securite.component';
import { SansAbrisComponent } from './pages/actions-projets/sans-abris/sans-abris.component';
import { CentreLoisirComponent } from './pages/actions-projets/centre-loisir/centre-loisir.component';
import { GaleriePhotosComponent } from './pages/actions-projets/galerie-photos/galerie-photos.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AgirDonComponent } from './pages/agir-don/agir-don.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { BenevolesComponent } from './components/benevoles/benevoles.component';
import { PartenairesComponent } from './components/partenaires/partenaires.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AgirAvecNousComponent,
    QuiSommesNousComponent,
    MissionsEtValeursComponent,
    CharteComponent,
    ZoneInterventionComponent,
    EducationComponent,
    FormationComponent,
    HeaderComponent,
    SanteComponent,
    SecuriteComponent,
    SansAbrisComponent,
    CentreLoisirComponent,
    GaleriePhotosComponent,
    EquipeComponent,
    ContactComponent,
    AgirDonComponent,
    EvenementsComponent,
    BenevolesComponent,
    PartenairesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
