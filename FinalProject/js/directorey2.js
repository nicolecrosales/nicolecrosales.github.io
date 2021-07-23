const requestURL = 'https://nicolecrosales.github.io/FinalProject/directory2.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns = jsonObject['business'];
            const town = towns.filter(x => x.name == 'Mall Marina' || x.name == 'Vida Natura' || x.name == 'Paseo Viña Centro'  || x.name == 'Reitz Propiedades' || x.name == 'Decathlon' || x.name == 'PUMA' || x.name == 'Barbizon' || x.name == 'Belda Cycles' || x.name == 'BP Iluminación')
    
            for (let i = 0; i < town.length; i++) {
                let card = document.createElement('section');
                
                let h2 = document.createElement('h2');
                let logo1 = document.createElement('img');
                let num1 = document.createElement('p');
                let web1 = document.createElement('p');
                let add1 = document.createElement('p');
                
        
                h2.innerHTML = `${town[i].name}`;
                logo1.setAttribute('src', `Images/${town[i].photo}`);
                logo1.setAttribute('alt', ` ${town[i].name}`);
                num1.innerHTML = 'Number: ' + `${town[i].number}`;
                web1.innerHTML = 'Website: ' + `${town[i].website}`;
                add1.innerHTML = `${town[i].address}`;
    
                
    
                    card.appendChild(h2);
                    card.appendChild(logo1);
                    card.appendChild(num1);
                    card.appendChild(web1);
                    card.appendChild(add1);
                    
                    document.querySelector('.home-local2').appendChild(card);
                }
        
        });