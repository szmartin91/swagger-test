const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks.routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./openapi.yaml");
app.use(express.json());
//swagger docs
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//routers
app.use("/tasks", taskRoutes);
//404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Router not found." });
});
module.exports = app;

//test comment to commit
