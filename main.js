const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];

const names = [
    'Petr',
    'Jana',
    'Pavel',
    'Zuzana',
    'Eva',
    'Adam',
    'Onyx',
    'Alex',
];

const persons = [{
    name: 'Petr',
    age: 16,
    gender: 'male'
}, {
    name: 'Jana',
    age: 8,
    gender: 'female'
}, {
    name: 'Pavel',
    age: 34,
    gender: 'male'
}, {
    name: 'Zuzana',
    age: 41,
    gender: 'female'
}, {
    name: 'Eva',
    age: 22,
    gender: 'female'
}, {
    name: 'Adam',
    age: 22,
    gender: 'male'
}, {
    name: 'Onyx',
    age: 37,
    gender: 'intersex'
}, {
    name: 'Alex',
    age: 29,
    gender: 'androgyne'
},];

// Pomocí metody `filter` získejte z pole `numbers` pouze ta čísla, která jsou sudá, a uložte je do proměnné `evenNumbers`. Vypište toto nové pole do konzole.
const evenNumbers = numbers.filter(oneNumbers => oneNumbers % 2 === 0)

console.log(evenNumbers);

// Pomocí metody `filter` získejte z pole `persons` pouze dospělé lidi a uložte je do proměnné `adults`. Vypište toto nové pole do konzole.
const adults = persons.filter(onePersons => onePersons.age > 18)

console.log(adults);

// Pomocí metody `map` vydělte všecha čísla v poli `numbers` třemi a uložte je do proměnné `dividedByThree`. Vypište toto nové pole do konzole.

const dividedByThree = numbers.map(oneNumbers => oneNumbers % 3 === 0)

console.log(dividedByThree);

// Pomocí metody `map` převeďte všechna čísla z pole `numbers` na řetězce. Výsledek vypište do konzole.

const numbersString = numbers.map(oneNumbers => String(oneNumbers))

console.log(numbersString);

// Z pole `persons` pomocí metody `map` vytvořte pro každou osobu e-mail ve formátu `petr@gmail.com` a výsledek uložte do proměnné `emails`. Vypište toto nové pole do konzole.

const emails = persons.map(onePersons => onePersons.name.toLowerCase() + '@gmail.com')

console.log(emails);

// Z pole `persons` pomocí metody `map` vytvořte pro každou osobu položku HTML seznamu ve formátu `<li>Petr (16)</li>` a výsledek uložte do proměnné `list`. Vypište toto nové pole do konzole.

const list = persons.map(onePersons => `<li>${onePersons.name} (${onePersons.age})</li>`)

console.log(list);

// 2. Agregace

// všechny osoby
// const item = persons
//     .map(onePersons => `<li>${onePersons.name} (${onePersons.age})</li>`)
//     .join('');

// pouze zletilé osoby
// const item = persons
//     .map(onePersons => {
//         if (onePersons.age > 18) {
//             return `<li>${onePersons.name} (${onePersons.age})</li>`;
//         }
//     })
//     .join('');

// pouze zletilé osoby včetně css třídy dle pohlaví
const items = persons
    .map(onePersons => {
        if (onePersons.age > 18) {
            if (onePersons.gender === 'male') {
                return `<li data-icon="🤴" class="male">${onePersons.name} (${onePersons.age})</li>`;
            } else if (onePersons.gender === 'female') {
                return `<li data-icon="👸" class="female">${onePersons.name} (${onePersons.age})</li>`;
            }  else {
                return `<li data-icon="🦄" class="nonbinary">${onePersons.name} (${onePersons.age})</li>`;
            }
        }
    })

console.log(items);

const divElm = document.createElement('div');
document.querySelector('body').appendChild(divElm);

const ulElm = document.createElement('ul');
ulElm.innerHTML = items.join('');
divElm.appendChild(ulElm);

console.log(ulElm);