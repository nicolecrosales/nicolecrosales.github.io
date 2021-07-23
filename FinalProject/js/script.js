/*-----------------------Menu Toggle------------------------------------- */
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("hide");
}
/*-----------------------Date---------------------------------------------*/
// Date 
let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
let month = date.getMonth()+1;
let daynumber = date.getDate();
document.querySelector("#year").textContent = year;
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let nameday = daylist[day];
let monthlist = ["January", "February", "March", "April" ,"May", "June", "July", "August", "September", "October", "November", "December"]
let monthname = monthlist[month];
let current = `${nameday}, ${daynumber} ${monthname} ${year}`;
document.querySelector("#date").textContent =  current;
/*-----------------------Last Modified------------------------------------*/
document.querySelector("#display").innerHTML = document.lastModified;
/*----------------------------------local home-------------------------------*/
const requestURL = 'https://nicolecrosales.github.io/FinalProject/directory.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['business'];
            const town = towns.filter(x => x.name == 'Mall Marina' || x.name == 'Vida Natura' || x.name == 'Paseo Viña Centro')
    
            for (let i = 0; i < town.length; i++) {
                let card = document.createElement('section');
                
                let h2 = document.createElement('h2');
                let logo = document.createElement('img');
                let num = document.createElement('p');
                let web = document.createElement('p');
                let add = document.createElement('p');
                
        
                h2.innerHTML = `${town[i].name}`;
                logo.setAttribute('src', `Images/${town[i].photo}`);
                logo.setAttribute('alt', ` ${town[i].name}`);
                num.innerHTML = 'Number: ' + `${town[i].number}`;
                web.innerHTML = 'Website: ' + `${town[i].website}`;
                add.innerHTML = `${town[i].address}`;
    
                
    
                    card.appendChild(h2);
                    card.appendChild(logo);
                    card.appendChild(num);
                    card.appendChild(web);
                    card.appendChild(add);
                    
                    document.querySelector('.home-local').appendChild(card);
                }
        
        });
        /*----------------------------------------------summary weather------------*/
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=0dcb04ddb341c8d129b99e8b866b705f";

    fetch(apiURL)
        .then((response) => response.json())
        .then((town) => {
            let description = town.weather[0].description;
            document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('temp').innerHTML = Math.round(town.main.temp);
    
            document.getElementById('humidity').innerHTML = town.main.humidity;
        });
        /*--------------------------------forecast----------------- */
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
            document.getElementById(`temp${day+1}`).textContent = x.main.temp.toFixed(0) + ' °F';
            document.getElementById(`img1`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[0].weather[0].icon +'.png';
            document.getElementById(`img2`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[1].weather[0].icon +'.png';
            document.getElementById(`img3`).src = 'https://openweathermap.org/img/w/' +fiveDayForecast[2].weather[0].icon +'.png';
            
            
            day++

            
        });
    });