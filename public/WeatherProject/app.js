const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extende:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    const query = req.body.cityName;
    const apiKey = "d469f609fb2d31e04ae178b2ea6bc027";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;

    https.get(url, function(response){
        // console.log(response.statusCode);

        response.on("data", function(data){
            var weatherData = JSON.parse(data);
            // console.log(weatherData);
            var temp = weatherData.main.temp;
            // console.log(temp);
            var weatherDescription = weatherData.weather[0].description;
            // console.log(weatherDescription);
            var icon = weatherData.weather[0].icon;
            // console.log(icon);
            const imageURL =" http://openweathermap.org/img/wn/"+ icon+ "@2x.png"

            // res.send("The temperature in Belagavi is " + temp + " degree Celcius. " + "The weather is currently " + weatherDescription);
            // res.send("<h1>The temperature in Belagavi is " + temp + " degree Celcius. The weather is currently "+ weatherDescription +"</h1>");

            res.write("<h1> The temperature in "+ query +" is "+ temp +" degree Celcius.</h1>");
            res.write("<p>The weather is currently "+weatherDescription +"</p>");
            res.write("<img src=" + imageURL +">");
            res.send();
        });
    });

    // res.send("server is up and running");

});

app.listen(3000,function(){
    console.log("server started on port 3000");
});