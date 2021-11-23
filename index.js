const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./config/db")

var routes = require("./routes/requestRoutes")

const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors())

routes(app)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})