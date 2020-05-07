//requireds
//const fs = require('express');
//const fs = require('./');
//const fs = require('fs');

//let base = 5;
//let data1 = '';
//
//for (i = 1; i <= 10; i++) {
//    let resultado = base * i;
//    data1 += `El resultado de ${base} * ${i} = ${resultado}\n`;
//}
//
//const data = new Uint8Array(Buffer.from(data1));
//// aqui se pone la direccion de la carpeta de destino aguardar
//fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//    if (err) throw err;
//
//    console.log(`El archivo de tabla-${base} fue creado!`);
//});
//si hay una costante y los corchetes es una destructuracion
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo.green}`))
            .catch(e =>
                console.log(e));
        break;

    default:
        console.log('Comando no definido');
}


//console.log(argv);
//let base = 'abc ';
//console.log(multiplicar);

//console.log(process.argv);


//el proces sirve para resivir parametros desde la terminal
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(`tabla del no° ${base}`);

//console.log(argv.base);
//console.log('Limite', argv.limite);
//console.log(argv2);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado ${ archivo}`))
//    .catch(e => {
//        console.log(e);
//    })