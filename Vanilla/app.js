'use strict';

const weather = require ("./GetWeather")
const {Console} = require('console');
const { RSA_X931_PADDING } = require('constants');
const Readline = require('readline'); // for including readline module in your application
const rl = Readline.createInterface ({ // Creates an Interface object
    input : process.stdin ,
    output : process.stdout ,
    terminal : false
});

const matcher = require('./matcher'); 

rl.setPrompt ('>');
rl.prompt ();
rl.on('line', reply => {
    matcher(reply , cb => {

        if(cb.intent =='Hello'){
        console.log(cb.entities.greeting + " human, may i help you ?");
        }

        else if(cb.intent =='Exit')
        {
            console.log("See you next time");
            rl.close();
        }
        else if(cb.intent =='GetWeatherCityTime')
        {
            console.log("it is very cold in Paris, France. With −2 degrees Celsius.");
        }
        else if(cb.intent =='Current Weather')
        {
            console.log(weather(cb.entities.city));
        }
        
        
        else
        console.log("I can't understand you sorry");

    });
    
 });

