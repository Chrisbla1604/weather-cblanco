


import { weather_data } from './data.js';

let selectedCity="ninguna";

let seleccion = new Object();


let loadDayForecastData = (city_selected) => {


    let[guayaquil,ambato,tena]=weather_data;

    switch (city_selected) {
        case "guayaquil":
          seleccion = guayaquil;
          console.log(seleccion);
          break;
        case "ambato":
          seleccion = ambato;
          console.log(seleccion);
          break;
        case "tena":
          seleccion = tena;
          console.log(seleccion);
          break;
    }

    
    let{city,date,maxtemperature,mintemperature,cloudiness,wind,rainfall,forecast_today, ...other}=seleccion;
    
    let[tarde,noche]=forecast_today;
    
    let{forecast:forecast_tarde,temperature:temperature_tarde,icon:icon_tarde}=tarde;
    
    let{forecast:forecast_noche,temperature:temperature_noche,icon:icon_noche}=noche;



    let ciudad = document.getElementById("city");
    ciudad.innerHTML=city;

    let dia = document.getElementById("date");
    dia.innerHTML=date;

    let maxtemperatura = document.getElementById("maxtemperature");
    maxtemperatura.innerHTML=maxtemperature;

    let mintemperatura = document.getElementById("mintemperature");
    mintemperatura.innerHTML=mintemperature;

    let nubosidad = document.getElementById("cloudiness");
    nubosidad.innerHTML=cloudiness;

    let viento = document.getElementById("wind");
    viento.innerHTML=wind;

    let lluvia = document.getElementById("rainfall");
    lluvia.innerHTML=rainfall;

    let tarde_forecast = document.getElementById("late_forecast");
    tarde_forecast.innerHTML=forecast_tarde;

    let tarde_temperature = document.getElementById("late_temperature");
    tarde_temperature.innerHTML=temperature_tarde;

    let tarde_icon = document.getElementById("late_icon");
    tarde_icon.innerHTML=icon_tarde;

    let noche_forecast = document.getElementById("night_forecast");
    noche_forecast.innerHTML=forecast_noche;

    let noche_temperature = document.getElementById("night_temperature");
    noche_temperature.innerHTML=temperature_noche;

    let noche_icon = document.getElementById("night_icon");
    noche_icon.innerHTML=icon_noche;	
}



let loadWeekForecastData = (city_selected) => {

    let element_uls = document.getElementsByTagName("ul");
    let ul = element_uls[0];


    let [guayaquil,ambato,tena] = weather_data;

    switch (city_selected) {
        case "guayaquil":
          seleccion = guayaquil;
          console.log(seleccion);
          break;
        case "ambato":
          seleccion = ambato;
          console.log(seleccion);
          break;
        case "tena":
          seleccion = tena;
          console.log(seleccion);
          break;
    }

    let {forecast_week} = seleccion;

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

let Load_option_ciudades = () => {

    let selector = document.getElementById("dropdownMenuButton")
    
    let planilla_ciudades =`<option value="" selected="" disabled="" hidden="">Seleccione una ciudad</option>
                            <option class="dropdown-item" value="guayaquil">${weather_data[0].city}</option>
                            <option class="dropdown-item" value="ambato">${weather_data[1].city}</option>
                            <option class="dropdown-item" value="tena">${weather_data[2].city}</option>`

        selector.innerHTML=planilla_ciudades;
}




document.addEventListener("DOMContentLoaded", (event) => {
    
    Load_option_ciudades();

});



let click_boton= document.getElementById("loadinfo");

click_boton.addEventListener('click', (event) => {

    if(selectedCity !== "ninguna" )
    {
        loadWeekForecastData(selectedCity);
    } 
});



let element_drop = document.getElementById("dropdownMenuButton");

element_drop.addEventListener('change', (event) => {
   
   
    selectedCity = event.target.value ;
    console.log(selectedCity);
    Hide_weekForecast();
    loadDayForecastData(selectedCity);  

});



let Hide_weekForecast = () =>{

  let element_uls = document.getElementsByTagName("ul");
  let ul = element_uls[0];
  ul.innerHTML="";
}
