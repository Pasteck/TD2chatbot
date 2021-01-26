const patternDict = [{
    pattern : '\\b(?<greeting>Hi|Hello|Hey)\\b',
    intent : 'Hello'
    },{
    pattern :'\\b(Bye|Exit|Quit)\\b',
    intent : 'Exit'
    },{
    pattern :"\\b(What's the weather like today|What's the weather like|What's the weather)\\b",
    intent : 'Weather'
    },{
    pattern :"\\b(weather\\slike\\sin\\s)\\b(?<city>[a-z ]+[ a-z]+?)\\b(?<time>tomorrow|today)$",
    intent : 'GetWeatherCityTime'
    },{
    pattern :"\\b(weather\\sin\\s)\\b(?<city>[a-z ]+[ a-z]+?)",
    intent : 'Current Weather'
    }];

    module.exports = patternDict;
    