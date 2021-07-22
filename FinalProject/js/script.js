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
const requestURL = '';

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
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');
        
                h2.innerHTML = `${town[i].name}`;
                motto.innerHTML = `${town[i].motto}`;
                founded.innerHTML = 'Year Founded: ' + `${town[i].yearFounded}`;
                population.innerHTML = 'Population: ' + `${town[i].currentPopulation}`;
                rain.innerHTML = 'Annual Rain Fall: ' + `${town[i].averageRainfall}`;
    
                image.setAttribute('src', `image/${town[i].photo}`);
                image.setAttribute('alt', ` ${town[i].name}!`);
    
                    card.appendChild(h2);
                    card.appendChild(motto);
                    card.appendChild(founded);
                    card.appendChild(population);
                    card.appendChild(rain);
                    card.appendChild(image);
                    document.querySelector('.home-local').appendChild(card);
                }
        
        });