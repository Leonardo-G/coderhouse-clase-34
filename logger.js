const log4js = require("log4js");

log4js.configure({
    appenders: {
        miLoggerConsole: { type: "console" },
        miLoggerFile: { type: "file", filename: "info.log"},
        miLoggerFileWarn: { type: "file", filename: "warn.log"},
        miLoggerFileError: { type: "file", filename: "error.log"},

    },
    categories: {
        default: { appenders: ["miLoggerConsole"], level: "trace"},
        consola: { appenders: ["miLoggerConsole"], level: "trace"},
        archivo: { appenders: ["miLoggerFile"], level: "info"},
        archivoWarn: { appenders: ["miLoggerFileWarn"], level: "warn"},
        archivoError: { appenders: ["miLoggerFileError"], level: "error"},
    }
})
const logger = log4js.getLogger();

logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

const loggerConsola = log4js.getLogger("consola");

loggerConsola.trace("Entering cheese testing");
loggerConsola.debug("Got cheese.");
loggerConsola.info("Cheese is Comté.");
loggerConsola.warn("Cheese is quite smelly.");
loggerConsola.error("Cheese is too ripe!");
loggerConsola.fatal("Cheese was breeding ground for listeria.");

const loggerArchivoInfo = log4js.getLogger("archivo");
const loggerArchivoWarn = log4js.getLogger("archivoWarn");
const loggerArchivoError = log4js.getLogger("archivoError");

module.exports = {
    loggerArchivoInfo,
    loggerArchivoWarn,
    loggerArchivoError
}