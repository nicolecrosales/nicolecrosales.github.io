const requestURL1 = 'https://nicolecrosales.github.io/FinalProject/directory.json';

    fetch(requestURL1)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            const towns1 = jsonObject['business'];
            const town1 = towns1.filter(x => x.name == 'Mall Marina' || x.name == 'Vida Natura' || x.name == 'Paseo Viña Centro'  || x.name == 'Reitz Propiedades' || x.name == 'Decathlon' || x.name == 'PUMA' || x.name == 'Barbizon' || x.name == 'Belda Cycles' || x.name == 'BP Iluminación')
    
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
                num.innerHTML = 'Number: ' + `${town1[i].number}`;
                web.innerHTML = 'Website: ' + `${town1[i].website}`;
                add.innerHTML = `${town1[i].address}`;
    
                
    
                    card1.appendChild(h21);
                    card1.appendChild(logo);
                    card1.appendChild(num);
                    card1.appendChild(web);
                    card1.appendChild(add);
                    
                    document.querySelector('.home-local').appendChild(card1);
                }
        
        });


function grid() {
    document.querySelector('.gridback').style.display="block";
    document.querySelector('.gridlist').style.display="none";
}
function list() {
    document.querySelector('.gridlist').style.display="block";
    document.querySelector('.gridback').style.display="none";
}