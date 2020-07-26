const sql = require("./db.js");


const Facture = function (facture) {
    this.totht = facture.totht;
    this.tva = facture.tva;
    this.totttc  = facture.totttc;
    this.dtfact  = facture.dtfact ;
};

//creer une nouvelle facture
Facture.create = (newFacture, result) => {
    sql.query("INSERT INTO facture SET ?", newFacture, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

   //  console.log("created consultation: ", { id: res.insertId, ...newFacture });
      result(null, { id: res.insertId, ...newFacture });
    });

};

// requete pour avoir la liste des prestations 
Facture.findLastId = result => {
    sql.query("SELECT MAX(id_fact) as idfact FROM facture ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Facture;