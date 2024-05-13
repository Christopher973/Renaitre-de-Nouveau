import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QuiSommesNousComponent } from './pages/accueil/qui-sommes-nous/qui-sommes-nous.component';
import { MissionsEtValeursComponent } from './pages/accueil/missions-et-valeurs/missions-et-valeurs.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'missions-et-valeurs', component: MissionsEtValeursComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
