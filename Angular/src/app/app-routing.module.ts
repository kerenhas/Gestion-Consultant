import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RapportFeuilleHeureComponent } from './components/rapport-feuille-heure/rapport-feuille-heure.component';
import { HomeComponent } from './components/home/home.component';
import { FactureComponent } from './components/facture/facture.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'RapportFeuille/Search', component: RapportFeuilleHeureComponent },
  { path: 'Facture', component: FactureComponent },
  /* { path: 'signin', component: SigninComponent },
  { path: '**', component: NotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
