const Consultation = require("../models/m_consultation.js");


// avoir l'ensemble des consultations en fonction de l'id du consultant
exports.findAllByIdConsultatnt = (req, res) => {
    Consultation.findConsultationByIdConsultant(req.params.consultantId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Consultant with id ${req.params.consultantId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Consultant with id " + req.params.consultantId
          });
        }
      } else res.send(data);
    });
  };

//   avoir l'ensemble des consultations pour ce client
exports.findAllByIdClient = (req, res) => {
    Consultation.findConsultationByIdClient(req.params.clientId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Consultant with id ${req.params.consultantId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Consultant with id " + req.params.consultantId
          });
        }
      } else res.send(data);
    });
  };

  
  //   avoir l'ensemble des consultations pour ce client
exports.findAllConsultFactByIdClient = (req, res) => {
  Consultation.findAllConsultFactByIdClient(req.params.clientId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Consultant with id ${req.params.consultantId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Consultant with id " + req.params.consultantId
        });
      }
    } else res.send(data);
  });
};

// Delete une consultation specifique
exports.delete = (req, res) => {
  Consultation.remove(req.params.consultationId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Consultation with id ${req.params.consultationId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Consultation with id " + req.params.consultationId
        });
      }
    } else res.send({ message: `Consultation was deleted successfully!` });
  });
};

  //   avoir l'ensemble des consultations pour ce user(consultant)
  exports.findAllByIdUser = (req, res) => {
    Consultation.findAllByIdUser(req.params.userId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Consultant with id ${req.params.userId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Consultant with id " + req.params.userId
          });
        }
      } else res.send(data);
    });
  };
  

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Consultation.updateById(
    req.params.clientId, req.params.lastid,
    new Consultation(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found consultation with id ${req.params.clientId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating consultation with id " + req.params.clientId
          });
        }
      } else res.send(data);
    }
  );
};


// Create and Save a new Consultation
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  

  const consultation = new Consultation({
    fact: req.body.fact,
    duree: req.body.duree,
    prix: req.body.prix,
    cli_id: req.body.cli_id,
    user_id: req.body.user_id,
    date: req.body.date,
    presta_id: req.body.presta_id,
    fact_id: req.body.fact_id,
  });

  // Save Consultation in the database
  Consultation.create(consultation, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Consultation."
      });
    else res.send(data);
  });
};

