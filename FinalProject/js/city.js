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
/*-------------------------------------events...........................*/
/*const requestURL = 'https://nicolecrosales.github.io/FinalProject/events.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['events'];
            const town = towns.filter(x => x.name == 'Secure Investment Seminar' || x.name == 'Free Fair' || x.name == 'Annual investment event')
    
            for (let i = 0; i < town.length; i++) {
                let card = document.createElement('section');
                
                let h2 = document.createElement('h2');
                let dat = document.createElement('h4');
                let tim = document.createElement('p');
                let fo = document.createElement('p');
                let add = document.createElement('p');
                
        
                h2.innerHTML = `${town[i].name}`;
                dat.innerHTML = `${town[i].date}`;
                tim.innerHTML = 'Time: ' + `${town[i].time}`;
                fo.innerHTML = 'Guest: ' + `${town[i].for}`;
                add.innerHTML = 'Address: ' + `${town[i].address}`;
                
    
                
    
                    card.appendChild(h2);
                    card.appendChild(dat);
                    card.appendChild(tim);
                    card.appendChild(fo);
                    card.appendChild(add);
                    
                    document.querySelector('.events').appendChild(card);
                }
        
        });*/