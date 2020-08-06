const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4e3760d459d91c1e109c14135f77c899&units=metric`);

    return resp.data.main.temp;

};


module.exports = {
    getClima
}