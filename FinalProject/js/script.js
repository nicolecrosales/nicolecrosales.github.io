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