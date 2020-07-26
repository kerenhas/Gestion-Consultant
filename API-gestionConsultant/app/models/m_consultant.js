const sql = require("./db.js");
var passwordHash = require('password-hash');

// constructor
const Consultant = function (consultant) {
    this.nomConsultant = consultant.nomConsultant;
    this.mailConsultant = consultant.mailConsultant;
    this.passwordConsultant = consultant.passwordConsultant;
};

Consultant.getAll = result => {
    sql.query("SELECT * FROM user WHERE admin = 0", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        //console.log("Consultant: ", res);
        result(null, res);
    });
};


module.exports = Consultant;
