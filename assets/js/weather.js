import { weather_data } from './data.js';

   



let loadDayForecastData = (a) => {


    let[guayaquil,ambato,tena]=weather_data;

    
    let{city,date,maxtemperature,mintemperature,cloudiness,wind,rainfall,forecast_today, ...other}=guayaquil;
    
    let[tarde,noche]=forecast_today;
    
    let{forecast:forecast_tarde,temperature:temperature_tarde,icon:icon_tarde}=tarde;
    
    let{forecast:forecast_noche,temperature:temperature_noche,icon:icon_noche}=noche;



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



let loadWeekForecastData = (a) => {

    let element_uls = document.getElementsByTagName("ul");
    let ul = element_uls[0];


    let [guayaquil,ambato,tena] = weather_data;

    let {forecast_week} = guayaquil;

    let [dia1,dia2,dia3,dia4,dia5,dia6,dia7]=forecast_week;

    let plantilla_final="";

    for(let i=0; i<forecast_week.length;i++)
    {
        let plantilla_semanal = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${forecast_week[i].text}</h6>
          <span class="text-xs">${forecast_week[i].date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${forecast_week[i].temperature.max}</span> |  <span class="text-dark mx-2">${forecast_week[i].temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${forecast_week[i].icon}</i></div>
        </div>
      </li> `
      
      plantilla_final = plantilla_final + plantilla_semanal;  

      }

     ul.innerHTML= plantilla_final;
		
}



document.addEventListener("DOMContentLoaded", (event) => {
    
    loadDayForecastData();

});

let click_boton= document.getElementById("loadinfo");

click_boton.addEventListener('click', (event) => {
    
    loadWeekForecastData();

});