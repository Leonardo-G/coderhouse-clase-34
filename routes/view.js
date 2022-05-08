const { Router } = require("express");
const compression = require("compression");
const { loggerArchivoInfo, loggerArchivoWarn, loggerArchivoError } = require("../logger");

const router = Router();

router.get("/", ( req, res ) => {
    res.send("<h1>Inicio Heroku</h1>");
})

router.get("/info-comp", compression(),( req, res ) => {
    loggerArchivoInfo.info("Peticion realizada en /info-comp");
    const string = "Hola";
    res.send(string.repeat(1000));
})

router.get("/info", async ( req, res ) => {
    loggerArchivoInfo.info("Peticion realizada en /info-comp");
    const string = "Hola";

    try {
        res.send(string.repeat(1000));
    } catch (error) {
        loggerArchivoError.info("Error al obtener la petición")
    }
})

router.get("*", ( req, res ) => {
    loggerArchivoWarn.warn("URL no existene")
})

module.exports = router;