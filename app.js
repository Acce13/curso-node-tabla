const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');

console.clear();

/**
 * 
 * Seccion 4 - Video 34
 * 
 */

crearArchivoTabla( argv.b, argv.l, argv.h )
    .then( nombreArchivo  => console.log( nombreArchivo, 'Creado!' ))
    .catch( err => console.log(err) );