const { crearArchivo } = require("./funciones/multiplicar");
const argv = require("./config/yargs");

require('colors');

console.clear();

console.log(argv);
crearArchivo(argv.b, argv.l, argv.i, argv.f)
    .then(msg => console.log(msg))
    .catch(error => console.log(error));
