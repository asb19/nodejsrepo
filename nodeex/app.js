const express = require("express");
const sample = require("./routes/sampleroute");

const app = express();

app.use(express.json());

app.use("/api", sample);

app.listen(5000, () => {
  console.log("server started");
});
