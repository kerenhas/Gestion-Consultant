module.exports = app => {
    const facture = require("../controllers/factureCtr.js");
    
    // Select l'ensemble des consultation pour l'id du consultant
   // app.get("/consultation/:consultantId", facture.findAllByIdConsultatnt);

     // facturer toutes les consultations pour cet utilisateur
  //   app.put("/consultation/Facture/:clientId", consultation.update);

    //ajout d'une consultation
    app.post("/facture", facture.create);

    // select du dernier id de la table facture
    app.get("/facture/getLastId", facture.findLastId);
    
  };