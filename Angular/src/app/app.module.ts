import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksComponent } from './components/tasks/tasks.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RapportFeuilleHeureComponent } from './components/rapport-feuille-heure/rapport-feuille-heure.component';
import { HomeComponent } from './components/home/home.component';
import { FactureComponent } from './components/facture/facture.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    RapportFeuilleHeureComponent,
    HomeComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
