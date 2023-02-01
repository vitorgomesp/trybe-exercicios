const h1 = document.createElement('h1');

document.body.appendChild(h1);

h1.innerHTML = 'TrybeTrip - Agência de Viagens';

const main = document.createElement('main');

document.body.appendChild(main);

main.className = 'main-content';

const mainSection = document.createElement('section');

main.appendChild(mainSection);

mainSection.className = 'center-content';

const p = document.createElement('p');

mainSection.appendChild(p);

p.innerHTML = 'Algum texto!!!';

const leftSection = document.createElement('section');

main.appendChild(leftSection);

leftSection.className = 'left-content';

const rightSection = document.createElement('section');

main.appendChild(rightSection);

rightSection.className = 'right-content';

const img = document.createElement('img');

img.src = "https://picsum.photos/200";

img.className = 'small-image';

leftSection.appendChild(img);

const listaU = document.createElement('ul');

rightSection.appendChild(listaU);

let numbers = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez']

for (index = 0; index < numbers.length; index += 1) {

    let objLista = document.createElement('li');
    objLista.innerHTML = numbers[index];
    listaU.appendChild(objLista);
}

for (index = 1; index <= 3; index += 1) {
    let h3Main = document.createElement('h3');
    h3Main.className = 'description';
    main.appendChild(h3Main); 
}

h1.className = 'title';

leftSection.parentNode.removeChild(leftSection);

rightSection.style.marginRight = 'auto';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'green';

listaU.lastChild.remove();
listaU.lastChild.remove();