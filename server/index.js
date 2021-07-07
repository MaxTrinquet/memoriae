const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
// get driver connection
const Db = require("./db/index");
const port = 3000

app.listen(port, () => {
  // perform a database connection when server starts
  Db.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
