const Consultant = require("../models/m_consultant.js");


// Retrieve all Consultant from the database.
exports.findAll = (req, res) => {
  Consultant.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving consultant."
      });
    else res.send(data);
  });
};

