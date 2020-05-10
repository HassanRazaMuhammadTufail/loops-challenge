import * as database from "../database.js";
import express from 'express';
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const Routes = require("./routes");

const port = 8000

database.connectDB();
app.use(cors());
app.use(bodyParser.json());

app.use("/", Routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))