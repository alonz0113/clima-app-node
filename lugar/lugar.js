const axios = require('axios');



const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);


    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ encodedUlr }&appid=4e3760d459d91c1e109c14135f77c899&units=metric`
    );

    /*  if (resp.data === 0) {
         throw new Error(`No hay resultados para ${ dir }`);
     } */

    const data = resp.data;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    const ciudad = data.name;
    const temperatura = data.main.temp;

    return {
        ciudad,
        lat,
        lng,
        temperatura
    };

};

module.exports = {
    getLugarLatLng
};