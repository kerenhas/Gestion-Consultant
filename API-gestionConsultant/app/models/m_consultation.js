const sql = require("./db.js");


const Consultation = function (consultation) {
    this.duree = consultation.duree;
    this.date = consultation.date;
    this.fact = consultation.fact;
    this.user_id = consultation.user_id;
    this.presta_id = consultation.presta_id;
    this.cli_id = consultation.cli_id;
    this.fact_id = consultation.fact_id;
    this.prix = consultation.prix;

};

Consultation.findConsultationByIdConsultant = (consultationId, result) => {
    sql.query(`SELECT consultation.id_cons as id_cons, client.nom as nom_cli, client.prenom as prenom_cli, prestation.lib as lib_prestation, consultation.date as date, consultation.duree as duree, consultation.fact as fact FROM consultation, client, user, prestation WHERE consultation.user_id=user.id_user and consultation.presta_id= prestation.id_presta and consultation.cli_id=client.id_cli and user_id = ${consultationId} `, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
  
      if (res.length) {
        result(null, res);
        return;
      }
      
    });
  };

  Consultation.findConsultationByIdClient = (consultationId, result) => {
    sql.query(`SELECT * FROM consultation WHERE cli_id = ${consultationId}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      
    });
  };
  
  Consultation.remove = (id, result) => {
    sql.query("DELETE FROM consultation WHERE id_cons = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Consultation with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted consultation with id: ", id);
      result(null, res);
    });
  };

  
  Consultation.findAllConsultFactByIdClient = (consultationId, result) => {
    sql.query(`SELECT ROUND(consultation.duree, 2) as 'duree', ROUND(consultation.prix, 2) as 'prix', consultation.id_cons, prestation.lib, user.nom, user.prenom, consultation.date FROM consultation, user, prestation WHERE user.id_user=consultation.user_id and consultation.presta_id=prestation.id_presta and consultation.fact = 0 and user.admin=0 and cli_id = ${consultationId}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res);
        return;
      }
      
    });
  };

Consultation.findAllByIdUser = (consultationId, result) => {

  sql.query(`SELECT cli_nom, cli_prenom,date_consult,duree_consult,lib FROM 

  (

  SELECT client.nom as cli_nom, client.prenom as cli_prenom, 

         consultation.date AS date_consult, ROUND(consultation.duree, 2) AS duree_consult,

         prestation.lib as lib, consultation.cli_id as cli_id

  FROM client, consultation, user, prestation 

  WHERE client.id_cli= consultation.cli_id and user.id_user=consultation.user_id 

        and consultation.presta_id=prestation.id_presta and user.admin=0 and user_id = ${consultationId} 

  GROUP BY cli_id,id_cons

  union

  SELECT '' as cli_nom, '' as cli_prenom, 

         '' AS date_consult,  ROUND(SUM(consultation.duree), 2) AS duree_consult,

         'Sous Total' AS lib, consultation.cli_id 

  FROM client, consultation, user, prestation 

  WHERE client.id_cli= consultation.cli_id and user.id_user=consultation.user_id 

        and consultation.presta_id=prestation.id_presta and user.admin=0 and user_id = ${consultationId} 

  GROUP BY cli_id

  ) as TabConsParCli

  order by cli_id,date_consult DESC`, (err, res) => {

      if (err) {

          result(err, null);

          return;

      }

      if (res.length) {

          result(null, res);

          return;

      }

  });

};
Consultation.create = (newConsultation, result) => {
    sql.query("INSERT INTO consultation SET ?", newConsultation, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

     console.log("created consultation: ", { id: res.insertId, ...newConsultation });
      result(null, { id: res.insertId, ...newConsultation });
    });

};




Consultation.updateById = (id, lastid, consultation, result) => {

 var fact = 1;
  sql.query(
    "UPDATE consultation SET fact = ? , fact_id = ? WHERE cli_id = ?",
    [fact, lastid, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      // console.log("updated consultation: ", { id: id, ...customer });
      // result(null, { id: id, ...customer });
    }
  );
};



Consultation.create = (newConsultation, result) => {


    sql.query("INSERT INTO consultation SET ?", newConsultation, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

  //    console.log("created consultation: ", { id: res.insertId, ...newConsultation });
      result(null, { id_cons: res.insertId, ...newConsultation });
    });

};


  module.exports = Consultation;