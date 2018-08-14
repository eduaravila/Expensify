const express = require("express");
const app = express();
const compress = require("compression");
const path = require("path");
const port = process.env.PORT || 3000;
app.use(compress());
app.use(express.static(path.join(__dirname, "../", "public/")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "public/", "index.html"));
});
app.listen(port, () => {
  console.log("App listening on port 3000!");
});
