module.exports = app => {
    const client = require("../controllers/clientsCtr.js");

    app.get("/clients", client.findAll);

    // on va chercher tous les clients qui ont des consultations non factures 
    app.get("/clients/Fact", client.findAllClientsNoFact);

    // on va chercher les infos sur le clients mis dans l'url
    app.get("/clients/getInfo/:clientId", client.findAllInfosClient);

  
  };
  