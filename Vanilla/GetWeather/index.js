"use strict";
const axios = require ("axios");
const apikey = '48f49a7ddccf85530cee4fc07d4df8d6'; 

const getWeather = location => {
    return new Promise (async (resolve,reject) => {
    try {
    const weatherConditions = await axios.get('pro.openweathermap.org/data/2.5/forecast/hourly',
     {
        params:{
        appid:apikey,
        q:location,
     }
     });
    
     resolve(weatherConditions.data) // returns back the results to the chatbot
     }
     catch(error){
     reject(error);
     }
     });
     }


module.exports = getWeather ;