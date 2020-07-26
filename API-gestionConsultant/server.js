const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue" });
});


require("./app/routes/consultant.routes.js")(app);
require("./app/routes/consultation.routes.js")(app);
require("./app/routes/clients.routes.js")(app);
require("./app/routes/prestation.routes.js")(app);
require("./app/routes/facture.routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
