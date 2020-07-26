const Prestation = require("../models/m_prestation.js");


// avoir l'ensemble des consultations en fonction de l'id du consultant
exports.findAll = (req, res) => {
    Prestation.getAllPrestation((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving consultant."
          });
        else res.send(data);
      });
  };        