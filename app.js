const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.set("views", path.join("./views"));
app.set("view engine", "pug")

app.use("/", require("./routes/view"));

app.listen(8000, () => {
    console.log("El servidor iniciado en", 8000)
})
