import { weather_data } from './data.js';

    let[guayaquil,ambato,tena]=weather_data;

    let{city,date,maxtemperature,mintemperature,cloudiness,wind,rainfall,forecast_today, ...other}=tena;
    
    let[tarde,noche]=forecast_today;
    
    let{forecast:forecast_tarde,temperature:temperature_tarde,icon:icon_tarde}=tarde;
    
    let{forecast:forecast_noche,temperature:temperature_noche,icon:icon_noche}=noche;



let loadDayForecastData = () => {

    let ciudad = document.getElementById("city");
    ciudad.innerHTML=city;
    console.log(ciudad);

    let dia = document.getElementById("date");
    dia.innerHTML=date;
    console.log(dia);

    let maxtemperatura = document.getElementById("maxtemperature");
    maxtemperatura.innerHTML=maxtemperature;
    console.log(maxtemperatura);

    let mintemperatura = document.getElementById("mintemperature");
    mintemperatura.innerHTML=mintemperature;
    console.log(mintemperatura);

    let nubosidad = document.getElementById("cloudiness");
    nubosidad.innerHTML=cloudiness;
    console.log(nubosidad);

    let viento = document.getElementById("wind");
    viento.innerHTML=wind;
    console.log(viento);

    let lluvia = document.getElementById("rainfall");
    lluvia.innerHTML=rainfall;
    console.log(lluvia);

    let tarde_forecast = document.getElementById("late_forecast");
    tarde_forecast.innerHTML=forecast_tarde;
    console.log(tarde_forecast);

    let tarde_temperature = document.getElementById("late_temperature");
    tarde_temperature.innerHTML=temperature_tarde;
    console.log(tarde_temperature);

    let tarde_icon = document.getElementById("late_icon");
    tarde_icon.innerHTML=icon_tarde;
    console.log(tarde_icon);

    let noche_forecast = document.getElementById("night_forecast");
    noche_forecast.innerHTML=forecast_noche;
    console.log(noche_forecast);

    let noche_temperature = document.getElementById("night_temperature");
    noche_temperature.innerHTML=temperature_noche;
    console.log(noche_temperature);

    let noche_icon = document.getElementById("night_icon");
    noche_icon.innerHTML=icon_noche;
    console.log(noche_icon);	
}

let loadWeekForecastData = () => {
		
}

loadDayForecastData();
loadWeekForecastData();