module.exports = app => {
    const consultant = require("../controllers/consultantCtr.js");
  
    //Create a new Consultant
    //app.post("/consultant", consultant.create);
    
    // Retrieve all Consultant
    app.get("/consultant", consultant.findAll);
  
  };
  