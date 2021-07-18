fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=78c3635114fcdf69ed38df35765e5249&units=imperial")
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
            document.getElementById(`temp${day+1}`).textContent = x.main.temp + ' °F';
            document.getElementById(`img1`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[0].weather[0].icon +'.png';
            document.getElementById(`img2`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[1].weather[0].icon +'.png';
            document.getElementById(`img3`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[2].weather[0].icon +'.png';
            document.getElementById(`img4`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[3].weather[0].icon +'.png';
            document.getElementById(`img5`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[4].weather[0].icon +'.png';
            
            day++

            
        });
    });


    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0dcb04ddb341c8d129b99e8b866b705f";

    fetch(apiURL)
        .then((response) => response.json())
        .then((town) => {
            let description = town.weather[0].description;
            document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    
            document.getElementById('humidity').innerHTML = town.main.humidity;
            document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
        });
    

