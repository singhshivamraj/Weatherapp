const input = document.querySelector('#input');
const button = document.querySelector('#button')
const img1 = document.querySelector('#img1')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const humidity = document.querySelector('#humidity_121')
const wind_spead = document.querySelector('#wind-spead')



 const checkWether = async (city)=>{
    const apiKey = '0d9efefa4e07c223394b67b5c608683d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    console.log(city);
    const wetherData = await fetch(`${url}`).then(response => response.json()) 

    temp.innerHTML = `${Math.round(wetherData.main.temp - 273.15)}°C`
    description.innerHTML = `${wetherData.weather[0].description}`
    humidity.innerHTML = `${wetherData.main.humidity}%`
    wind_spead.innerHTML = `${wetherData.wind.speed}Km/H`;
    switch(wetherData.weather[0].main){
        case 'clouds':
            img1.src = "/img/cloudy.png";
            break;

        case 'Haze':
            img1.src = "/img/sun.png";
            break;
        case 'Fog':
            img1.src = "/img/Fog.png";
            break;
            
    }
    console.log(wetherData);
    
    
    
}




button.addEventListener('click', ()=>{
    checkWether(input.value)
})