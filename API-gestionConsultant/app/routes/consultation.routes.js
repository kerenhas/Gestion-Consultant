module.exports = app => {
    const consultation = require("../controllers/consultationCtr.js");
    
    // Select l'ensemble des consultation pour l'id du consultant
    app.get("/consultation/:consultantId", consultation.findAllByIdConsultatnt);

    // Select l'ensemble des consultation pour l'id du client
    app.get("/consultationclient/:clientId", consultation.findAllByIdClient);

        //details des consultations a facturer
     app.get("/consultationFacture/:clientId", consultation.findAllConsultFactByIdClient);

     // facturer toutes les consultations pour cet utilisateur
     app.put("/consultation/Facture/:clientId/:lastid", consultation.update);

    //ajout d'une consultation
    app.post("/consultation", consultation.create);

    //requete qui cherche ttes les consultations en details, de chaque consultant par client
    app.get("/consultationRecap/:userId", consultation.findAllByIdUser);

    //faire un delete d'une consultation
     app.delete("/consultation/:consultationId", consultation.delete);
  
    
  };
  