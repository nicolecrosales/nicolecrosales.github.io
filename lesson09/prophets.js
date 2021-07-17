
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        
        const prophets = jsonObject['prophets']
        
        //works through each prophet in the array of prophets
        for (let i = 0; i < prophets.length; i++){

        //name the different areas of the dom
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let imgpro = document.createElement('img');

        //set up what will be going in each of the create elements
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birth.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        imgpro.setAttribute('src', prophets[i].imageurl);
        imgpro.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
        
        //tell the card the order you want the information placed
        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(imgpro);

        //place in the 'card' the above information
        document.querySelector('div.cards').appendChild(card);
    }
    });


    const date = new Date();
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.querySelector("#display").innerHTML = document.lastModified;
