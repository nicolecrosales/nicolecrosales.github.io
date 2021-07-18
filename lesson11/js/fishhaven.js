const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=12f91a41bd21c1ca9341109b7e228eab";

fetch(apiURL)
        .then((response) => response.json())
        .then((town) => {
            let description = town.weather[0].description;
            document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    
            document.getElementById('humidity').innerHTML = town.main.humidity;
            document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
        });

fetch("https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=12f91a41bd21c1ca9341109b7e228eab")
        .then((response) => response.json())
        .then((jsObject) =>{
            console.log(jsObject);
    
            let day = 0;
            const dayofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
            const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
            console.log(fiveDayForecast);
    
            fiveDayForecast.forEach(x=>{
                let d = new Date(x.dt_txt);
                console.log(d);
                document.getElementById(`day${day+1}`).textContent = dayofWeek[d.getDay()];
                document.getElementById(`temp${day+1}`).textContent = x.main.temp.toFixed(0) + ' °F';
                document.getElementById(`img1`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[0].weather[0].icon +'.png';
                document.getElementById(`img2`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[1].weather[0].icon +'.png';
                document.getElementById(`img3`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[2].weather[0].icon +'.png';
                document.getElementById(`img4`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[3].weather[0].icon +'.png';
                document.getElementById(`img5`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[4].weather[0].icon +'.png';
                
                day++
    
                
            });
        });
    
        const prestondata= 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(prestondata)
.then(function(response) {
    return response.json();
})
.then(function(jsonObject) {
    const towns = jsonObject['towns'];

    const town = towns.filter(town => town.name == 'Fish Haven')
  
    town.forEach(town => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    h3.textContent = 'Upcoming Town Events';
    card.appendChild(h3);

    p1.textContent = town.events[0];
    card.appendChild(p1);

    p2.textContent = town.events[1];
    card.appendChild(p2);

    p3.textContent = town.events[2];
    card.appendChild(p3);

    document.querySelector('div.events').appendChild(card);
  });

});