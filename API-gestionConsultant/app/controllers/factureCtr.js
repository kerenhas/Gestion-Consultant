const Facture = require("../models/m_facture.js");

// Create and Save a new Consultation
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const facture = new Facture({
      totht: req.body.totht,
      tva: req.body.tva,
      totttc: req.body.totttc,
      dtfact: req.body.dtfact,
    });
  
    // Save Consultation in the database
    Facture.create(facture, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Consultation."
        });
      else res.send(data);
    });
  };
  

  exports.findLastId = (req, res) => {
    
    Facture.findLastId((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving consultant."
          });
        else res.send(data);
      });
  };  


  

