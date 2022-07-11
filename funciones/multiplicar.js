const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base=5, listar=false, inicio=1, final=10) => {
    try {
        let salida = ""; 
        let salida_consola = "";
    
        if(inicio <= final) {
            for (let i = inicio; i <= final; i++) {
                salida_consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
                salida += `${base} x ${i} = ${base * i}\n`;
            }
        } else {
            for (let i = inicio; i >= final; i--) {
                salida_consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
                salida += `${base} x ${i} = ${base * i}\n`;
            }           
        }
 
        if(listar) {
            console.log("========================================".green);
            console.log("           Tabla del: ".green, colors.blue(base));
            console.log("========================================\n".green);
            console.log(salida_consola);
        }
    
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    
        return "Tabla creada con exito";

    } catch (error) {
        throw error;
    }

};

module.exports = {
    crearArchivo
}