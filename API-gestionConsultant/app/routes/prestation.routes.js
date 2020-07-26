module.exports = app => {
    const prestation = require("../controllers/prestationsCtr.js");

    app.get("/prestations", prestation.findAll);
  
  };
  