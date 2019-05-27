const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=60059997db69105a3a80ea0bc6c56fa8
        &units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}