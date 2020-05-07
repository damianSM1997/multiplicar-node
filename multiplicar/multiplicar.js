const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`tabla del no° ${base}`.green);
    console.log('========================='.green);
    for (i = 1; i <= limite; i++) {
        let resultado = base * i;
        console.log(`El resultado de ${base} * ${i} = ${resultado}\n`);
    }
}

//module.exports.crearArchivo = (base) => { tambien se puede hacer de esta forma para exportar con modulos
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('EL valor introducido para la base no es un numero :pp');
            //para que ya no continue se pone el return
            return;

        }

        let data1 = '';

        for (i = 1; i <= limite; i++) {
            let resultado = base * i;
            data1 += `El resultado de ${base} * ${i} = ${resultado}\n`;
        }

        //for (i = 1; i <= limite; i++) {
        //    let resultado = base * i;
        //    console.log(`El resultado de ${base} * ${i} = ${resultado}\n`);
        //}

        const data = new Uint8Array(Buffer.from(data1));
        // aqui se pone la direccion de la carpeta de destino aguardar
        fs.writeFile(`tablas/tabla-del-${base}-al${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
            console.log(colors.rainbow('OMG Rainbows!')); // rainbow


        });

    });
}

module.exports = {
    //crearArchivo: crearArchivo; esto era el mismo modelo
    crearArchivo,
    listarTabla
}