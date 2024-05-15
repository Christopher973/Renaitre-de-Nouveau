import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QuiSommesNousComponent } from './pages/accueil/qui-sommes-nous/qui-sommes-nous.component';
import { MissionsEtValeursComponent } from './pages/accueil/missions-et-valeurs/missions-et-valeurs.component';
import { CharteComponent } from './pages/accueil/charte/charte.component';
import { ZoneInterventionComponent } from './pages/accueil/zone-intervention/zone-intervention.component';
import { EducationComponent } from './pages/actions-projets/education/education.component';
import { FormationComponent } from './pages/actions-projets/formation/formation.component';
import { SanteComponent } from './pages/actions-projets/sante/sante.component';
import { SecuriteComponent } from './pages/actions-projets/securite/securite.component';
import { SansAbrisComponent } from './pages/actions-projets/sans-abris/sans-abris.component';
import { CentreLoisirComponent } from './pages/actions-projets/centre-loisir/centre-loisir.component';
import { GaleriePhotosComponent } from './pages/actions-projets/galerie-photos/galerie-photos.component';
import { EquipeComponent } from './pages/equipe/equipe.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'missions-et-valeurs', component: MissionsEtValeursComponent },
  { path: 'charte', component: CharteComponent },
  { path: 'zone-intervention', component: ZoneInterventionComponent },
  { path: 'actions-projets/education', component: EducationComponent },
  { path: 'actions-projets/formation', component: FormationComponent },
  { path: 'actions-projets/sante', component: SanteComponent },
  { path: 'actions-projets/securite', component: SecuriteComponent },
  { path: 'actions-projets/sans-abris', component: SansAbrisComponent },
  { path: 'actions-projets/centre-loisir', component: CentreLoisirComponent },
  { path: 'actions-projets/galerie-photos', component: GaleriePhotosComponent },
  { path: 'equipe', component: EquipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
