const Client = require("../models/m_clients.js");

// permet davoir tous les clients 
exports.findAll = (req, res) => {
    Client.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving consultant."
        });
      else res.send(data);
    });
  };

  exports.findAllClientsNoFact = (req, res) => {
    Client.getAllClientsNoFact((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving consultant."
        });
      else res.send(data);
    });
  };
  
exports.findAllInfosClient = (req, res) => {
  Client.getAllInfosClient(req.params.clientId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Client with id ${req.params.clientId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Consultant with id " + req.params.clientId
        });
      }
    } else res.send(data);
  });
};