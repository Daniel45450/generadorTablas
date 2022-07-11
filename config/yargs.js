const { describe } = require('yargs');

require('colors');
const argv = require("yargs").
            option("b", {
             alias: "base",
             type: "number",
             describe: "Toma la base de la tabla de multiplicar",
             demandOption: true,
             default: 5,
            })
            .option("l", {
                alias: "listar",
                type: "boolean",
                describe: "Muestra la tabla en consola",
                default: false,
            })
            .option("i", {
                alias: "inicio",
                type: "number",
                default: 1,
                describe: "Indica el comienzo de la tabla"
            })
            .option("f", {
                alias: "fin",
                default: 10,
                type: "number",
                describe: "Indica el final de la tabla"
            })
            .check( (argv, options) => {
                if(isNaN(argv.b)) {
                    throw "La base tiene que ser un numero"
                }
                if(isNaN(argv.i)) {
                    throw "El inicio tiene que ser un numero"
                }
                if(isNaN(argv.f)) {
                    throw "El final tiene que ser un numero"
                }
                return true;
            })
            .argv;

module.exports = argv;