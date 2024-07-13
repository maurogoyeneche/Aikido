require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 3001;
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
app.use(express.json());

routes(app);

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`)
);
