const requestURL1 = 'https://nicolecrosales.github.io/FinalProject/workers.json';

    fetch(requestURL1)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns1 = jsonObject['workers'];
            const town1 = towns1.filter(x => x.name == 'General Director' || x.name == 'Sub Director' || x.name == 'Executive Director' || x.name == 'Director')
    
            for (let i = 0; i < town1.length; i++) {
                let card1 = document.createElement('section');
                
                let h21 = document.createElement('h2');
                let logo = document.createElement('img');
                let num = document.createElement('p');
                let web = document.createElement('p');
                let add = document.createElement('p');
                
        
                h21.innerHTML = `${town1[i].name}`;
                logo.setAttribute('src', `Images/${town1[i].photo}`);
                logo.setAttribute('alt', ` ${town1[i].name}`);
                num.innerHTML = 'Name: ' + `${town1[i].namep}`;
                web.innerHTML = 'Section: ' + `${town1[i].area}`;
                add.innerHTML = 'Contact: ' + `${town1[i].contact}`;
    
                
    
                card1.appendChild(logo);
                card1.appendChild(h21);
                    
                    card1.appendChild(num);
                    card1.appendChild(web);
                    card1.appendChild(add);
                    
                    document.querySelector('.dic').appendChild(card1);
                }
        
        });