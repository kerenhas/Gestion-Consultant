import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import * as JSPdf from 'jspdf';
import autoTable from 'jspdf-autotable'
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  private apiUrl = 'http://localhost:3000/clients/Fact';
  private apiUrlConsultation = "http://localhost:3000/consultationFacture/";
  private apiUrlClientInfos = "http://localhost:3000/clients/getInfo/";
  private apiUrlFacturer = "http://localhost:3000/consultation/Facture/";
  private apiUrlCreateFacture = "http://localhost:3000/facture/";
  private apiUrlLastIdFact = "http://localhost:3000/facture/getLastId";

  data: any = {
  };

  idclient = null;
  nom_cli = "";
  prenom_cli = "";
  adresse_cli = "";
  mail_cli = "";
  totalHT = 0;
  totalTTC = 0;
  TVA_cons = 1.20;

  lastId = [];
  client = [];
  tab = [];
  facture = [];
  clientDetail = [];
  @ViewChild('pdfTable') pdfTable: ElementRef;

  constructor(private http: HttpClient) {
    this.loadData()
  }

  /**
   * Chargement de l'URL l'API 
   */
  loadData() {
    this.http.get(this.apiUrl).subscribe((res: Array<Input>) => {
      this.client = res
    })
    return this.http.get(this.apiUrl);
  }

  ngOnInit(): void {

  }


  onFormSubmit(id: NgForm) {

  }

  onChange() {

  }

  // qd il clique sur ok
  resetSearchForm(searchForm: NgForm) {
    
    var apiUrlConsultationnew = this.apiUrlConsultation + searchForm.value["Facturation"];
    console.log(apiUrlConsultationnew);
    this.tabConsultation(apiUrlConsultationnew);


    // on va chercher les infos pour pouvoir les afficher sur le client selectionner en fonction de son
    var apiUrlClientInfosnew = this.apiUrlClientInfos + searchForm.value["Facturation"];
    this.tabClient(apiUrlClientInfosnew);
    this.idclient = searchForm.value["Facturation"];
    //console.log(this.tabClient(apiUrlClientInfosnew));

    this.nom_cli = "";
    this.adresse_cli = "";
    this.mail_cli = "";
    this.totalHT = 0;
    this.totalTTC = 0;
  }

  tabConsultation($id) {
    
    this.http.get($id).subscribe((res: Array<Input>) => {
      this.facture = res
      // this.client = res;

      //this.facture.forEach(element => console.log(element));

      for (var i = 0; i < this.facture.length; i++) {
        this.totalHT += this.facture[i].prix * this.facture[i].duree;
      }

      this.totalTTC = (this.totalHT * this.TVA_cons);

    })
    return this.http.get($id);
  }

 
  tabClient($id) {
    this.http.get($id).subscribe((res: Array<Input>) => {
      this.clientDetail = res
      this.nom_cli = this.clientDetail[0].nom;
      this.adresse_cli = this.clientDetail[0].adresse;
      this.mail_cli = this.clientDetail[0].mail;
      this.prenom_cli = this.clientDetail[0].prenom;
    })
    return this.http.get($id);
  }

  // permet de facturer toutes les consultations du clients avec un put
  tabClientFacture($id) {
    this.http.put($id, null).subscribe((res: Array<Input>) => {
    });
    return this.http.put($id, null);
  }

  // il clique sur le bouton facturer
  clickEvent() {
    // inserer dans la base de donnée la facture

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //const requestOptions = new RequestOptions({ headers: headers });
    var ladate = new Date();
    let postData = {
      "totht": this.totalHT,
      "tva": (this.TVA_cons - 1) * 100,
      "totttc": this.totalTTC,
      "dtfact": ladate.getFullYear() + "-" + (ladate.getMonth() + 1) + "-" + ladate.getDate()
    }

 
    this.http.post(this.apiUrlCreateFacture, postData)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });

    // voir le dernier ID inserer dans la tble facture
      //  var id = this.getLastIdFact();
     this.http.get(this.apiUrlLastIdFact).subscribe((res: Array<Input>) => {

      this.lastId = res

      this.lastId[0]["idfact"] =  this.lastId[0]["idfact"] + 1;
      // mettre a jour la table consultation 
      var apiUrlFacturernew = this.apiUrlFacturer + this.idclient + "/" + this.lastId[0]["idfact"];
      console.log(apiUrlFacturernew);
      this.tabClientFacture(apiUrlFacturernew);

    })

    alert("Vous venez facturer");
    location.reload() ;

  }

  // voir le dernier ID inserer dans la tble facture
  getLastIdFact() {
    this.http.get(this.apiUrlLastIdFact).subscribe((res: Array<Input>) => {

      this.lastId = res
      console.log(this.lastId[0]["idfact"]);
      return this.lastId[0]["idfact"];
      // console.log(res[0]["idfact"]);
    })
    return this.http.get(this.apiUrlLastIdFact);
  }

   downloadPDF() {
    var pdfsize = 'a0';
    var doc = new JSPdf('5', 'pt', pdfsize);
    doc.text(100, 100, 'Nom et prenom : ' + this.nom_cli + ' ' + this.prenom_cli);
    doc.text(100, 120, 'Adresse : ' + this.adresse_cli);


    autoTable(doc, {
      html: this.pdfTable.nativeElement,
      startY: 150,
      styles: {
        fontSize: 25,
        cellWidth: 'wrap'
      }
    });

    doc.save(this.nom_cli + '_' + this.prenom_cli + '.pdf');
   };


}

