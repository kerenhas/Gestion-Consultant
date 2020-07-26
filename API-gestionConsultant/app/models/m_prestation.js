const sql = require("./db.js");

const Prestation = function (prestation) {
    this.intitulePrestation = prestation.intitulePrestation;
};


// requete pour avoir la liste des prestations 
Prestation.getAllPrestation = result => {
    console.log("prestation");
    sql.query("SELECT * FROM prestation ", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Prestation;