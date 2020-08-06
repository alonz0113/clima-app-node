const argv = require('./configure/yargs').argv;
const clima = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');


let comando = argv._[0];


/* lugar.getLugarLatLng(argv.direccion)
    .then(console.log) */

/* clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log); */



getLugarLatLng(argv.direccion)
    .then(peticion => {

        console.log(`El clima de ${ argv.direccion } es de ${ peticion.temperatura }`);

    })
    .catch(err => {
        console.log(`No es posible mostrar el clima de ${ argv.direccion }`);
    });