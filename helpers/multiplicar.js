const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async ( base = 5, listar = false, hasta = 10 ) => {

    try {

        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++) {
            salida += `${ base } X ${ i } = ${ base * i }\n`;
            consola += `${ colors.green(base) } ${ 'X'.red } ${ i } ${ '='.red } ${ base * i }\n`;
        }
        
        if ( listar ) {
            console.log('================='.green);
            console.log(`== Tabla del ${ base } ==`.green);
            console.log('================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
        
        return `Tabla-${ base }.txt`;

    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivoTabla
}