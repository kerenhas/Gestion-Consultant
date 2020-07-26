import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // url qui va chercher la liste de tous les clients
  private apiUrlConsultations = 'http://localhost:3000/consultationRecap/';

  // on dit que le consultant est le numero 1 pusique psa de page de connnexion
  user_id = 1;
  consultation = [];

  constructor(private http: HttpClient) {
    this.loadDataConsultation();
  }

  total = 0;
  /**
   * chercher toutes les consultations : le client(nom, prenom) date duree type de prestations , si elle est facture pr chaque consultation
  */
  loadDataConsultation() {
    var apiUrlNew = this.apiUrlConsultations + this.user_id;
    this.http.get(apiUrlNew).subscribe((res: Array<Input>) => {
      //console.log(this.consultation);
      this.consultation = res
      //console.log(this.consultation);

      for (var i = 0; i < this.consultation.length; i++) {
        if (this.consultation[i].lib == "Sous Total") {
          this.total = this.total +this.consultation[i].duree_consult ;
        }
      }
    })  
    return this.http.get(apiUrlNew);
  }




}
