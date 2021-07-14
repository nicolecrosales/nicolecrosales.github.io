const input = document.querySelector('#favchap');
const button = document.querySelector('button')
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    let myItem = input.value;
    input.value = '';

    let li = document.createElement('li');
    let text = document.createElement('span');
    let deletebutton = document.createElement('button');

    li.appendChild(text);
    text.textContent = myItem;
    li.appendChild(deletebutton);
    deletebutton.textContent = '❌';
    list.appendChild(li);

    deletebutton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
      });
  });