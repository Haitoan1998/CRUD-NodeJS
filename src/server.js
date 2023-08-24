require("dotenv").config();
const express = require("express");
const templateMorganStaticUrlencoded = require("./config/TemplateMorganStaticUrlencoded");
const configRoutes = require("./routes/configRoutes");
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

//config Template Morgan Staticfiles Urlencoded
templateMorganStaticUrlencoded(app);

//config routes
configRoutes(app);

app.listen(port, hostname, () => {
  console.log(`http://localhost:${port}`);
});
