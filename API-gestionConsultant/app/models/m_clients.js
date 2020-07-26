const sql = require("./db.js");


const Client = function (client) {
    this.nomClient = client.nomClient;
    this.prenomClient = client.prenomClient;
    this.mailClient = client.mailClient;
    this.telephoneClient = client.telephoneClient;
};

// requete pour avoir la liste des clients 
Client.getAll = result => {
    sql.query("SELECT * FROM client ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        //console.log("Consultant: ", res);
        result(null, res);
    });
};

// Requete pour avoir la liste desclients qui ont des factures non factures
Client.getAllClientsNoFact = result => {
    sql.query("SELECT DISTINCT client.nom, client.prenom, client.id_cli FROM consultation, client WHERE consultation.cli_id=client.id_cli and consultation.fact=0", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};


Client.getAllInfosClient = (clientId, result) => {
  sql.query(`SELECT * FROM client WHERE id_cli = ${clientId}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      
    });
  };


module.exports = Client;