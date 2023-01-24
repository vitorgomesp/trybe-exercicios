let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(menuServices);
console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);


let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let items = 0; items < groceryList.length; items += 1) {
    console.log(groceryList[items]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let nome of names) {
    console.log(nome);
}