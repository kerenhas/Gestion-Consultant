import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subscriber } from 'rxjs';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-rapport-feuille-heure',
  templateUrl: './rapport-feuille-heure.component.html',
  styleUrls: ['./rapport-feuille-heure.component.css']
})

export class RapportFeuilleHeureComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/consultant';
  private apiUrlConsultation = "http://localhost:3000/consultation/";
  html = [];
  consults = [];
  tab = [];
  affiche = false;
  data: any = {

  };

  constructor(private http: HttpClient) {
    this.loadData()
  }

  ngOnInit(): void {

  }

  /**
   * Chargement de l'URL de l'API 
   */
  loadData() {
    this.http.get(this.apiUrl).subscribe((res: Array<Input>) => {
      this.html = res
    })
    return this.http.get(this.apiUrl);
  }

  /**
   * Cette fonction permet de récupèrer la donner sélctionner dans la liste déroulante
   * @param searchForm 
   */
  resetSearchForm(searchForm: NgForm) {
    var apiUrlConsultationnew = this.apiUrlConsultation + searchForm.value["Consultant"];
    this.tabConsultation(apiUrlConsultationnew);
    //console.log(this.consults.length);
    }

  /**
   * On met les données (consultations) dans le tableau consults
   * @param $id
   */
  tabConsultation($id) {
    this.consults = [];
    this.http.get($id).subscribe((res: Array<Input>) => {
      //this.tab = res
      this.consults = res;
    })
    return this.http.get($id);
  }


  onFormSubmit(id: NgForm) {

  }

  onChange() {

  }


    //permet de supprimer une consultations par le consultants
  deleteCons($i)
  {
    var urlDelete = "http://localhost:3000/consultation/"+ $i;
    this.http.delete(urlDelete)
    .subscribe((res:Response) => res.status);


    alert("Vous venez de supprimer");
    location.reload() 

  }

}
