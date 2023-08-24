const homeRouter = require("./homeRouter");
const configRoutes = (app) => {
  app.use("/", homeRouter);
};

module.exports = configRoutes;
