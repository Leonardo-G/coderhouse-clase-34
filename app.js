const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.set("views", path.join("./views"));
app.set("view engine", "pug")

app.use("/", require("./routes/view"));

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("El servidor iniciado en", port)
})
