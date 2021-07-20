
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['towns'];
            const town = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven')
    
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
                    document.querySelector('.main-home-section2').appendChild(card);
                }
        
        });
    
    