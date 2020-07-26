import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {format} from "date-fns";
import * as moment from 'moment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page 
{
  // url qui va chercher la liste de tous les clients
  private apiUrlClients = 'http://localhost:3000/clients/';
  // url qui va chercher la liste de toutes les prestations
  private apiUrlPrestations = 'http://localhost:3000/prestations/';
  //url qui va creer les consultations
  private apiUrlCreateConsultation = 'http://localhost:3000/consultation/';

  constructor(private http: HttpClient) {
    this.loadDataClient();
    this.loadDataPrestation();
  }

  ngOnInit(): void  {}
  client = [];
  prestation = [];
    /**
   * Chargement de l'URL l'API pour les clients 
   */
  loadDataClient() {
    this.http.get(this.apiUrlClients).subscribe((res: Array<Input>) => {
      this.client = res
    })
    return this.http.get(this.apiUrlClients);
  }

  /**
   * Chargement de l'URL l'API pour les prestations 
   */
  loadDataPrestation() {
    this.http.get(this.apiUrlPrestations).subscribe((res: Array<Input>) => {
      this.prestation = res
    })
    return this.http.get(this.apiUrlPrestations);
  }

  
  // qd il clique sur ok
  resetSearchForm(searchForm: NgForm) {

    // on recupere tous les champs du formulaire
    var cli_id = searchForm.value["Client"];

    var date = format(new Date(searchForm.value["Date"]), "yyyy-MM-dd");
    // var duree = moment(searchForm.value["duree"], 'H:m').format('H.mm')
    format(new Date(searchForm.value["Date"]), "yyyy-MM-dd");
    var presta_id = searchForm.value["prestation"];
    var duree=searchForm.value["duree"];
    console.log(searchForm.value["duree"]);
    console.log(searchForm.value["prix"]);
    var prix = searchForm.value["prix"];
    var fact = 0; 
    // on mets un idconsultant au hasard id
    var user_id = "1";

    let postData = {
      "cli_id": cli_id,
      "date": date,
      "duree": duree,
      "presta_id": presta_id,
      "prix": prix,
      "user_id": user_id,
      "fact":fact

    }

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    //const requestOptions = new RequestOptions({ headers: headers });


    this.http.post("http://localhost:3000/consultation", postData)
          .subscribe(data => {
            console.log(data['_body']);
          }, error => {
            console.log(error);
          });

          alert("Vous venez d'ajouter une consultation");
          location.reload()
   }

  onFormSubmit(id: NgForm) {

  }
  onChange() {

  }

}
