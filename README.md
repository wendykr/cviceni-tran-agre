# Cvičení: Transformace, agregace - Lekce 2

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Transformace

Do `script.js` si zkopírujte následující pole dat. Budeme s nimi pracovat v dalších cvičeních.

```javascript
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
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];
```

Použijte opět pole `numbers`, `names` a `persons` z předchozího cvičení.

- Pomocí metody `filter` získejte z pole `numbers` pouze ta čísla, která jsou sudá, a uložte je do proměnné `evenNumbers`. Vypište toto nové pole do konzole.
- Pomocí metody `filter` získejte z pole `persons` pouze dospělé lidi a uložte je do proměnné `adults`. Vypište toto nové pole do konzole.
- Pomocí metody `map` vydělte všecha čísla v poli `numbers` třemi a uložte je do proměnné `dividedByThree`. Vypište toto nové pole do konzole.
- Pomocí metody `map` převeďte všechna čísla z pole `numbers` na řetězce. Výsledek vypište do konzole.
- Z pole `persons` pomocí metody `map` vytvořte pro každou osobu e-mail ve formátu `petr@gmail.com` a výsledek uložte do proměnné `emails`. Vypište toto nové pole do konzole.
- Z pole `persons` pomocí metody `map` vytvořte pro každou osobu položku HTML seznamu ve formátu `<li>Petr (16)</li>` a výsledek uložte do proměnné `list`. Vypište toto nové pole do konzole.


## 2. Agregace

Použijte opět pole `persons` z předchozího cvičení.

- Pomocí metod `map` a `join` vytvořte z pole `persons` HTML seznam v následujícím formátu:
```html
<ul>
  <li>Petr (16)</li>
  <li>Jana (8)</li>
  <!-- a tak dále... -->
</ul>
```

- Pomocí `innerHTML` vložte tento seznam do stránky.
- Proveďte totéž jako v předchozím bodě, zobrazte však v seznamu pouze zletilé osoby.
- Proveďte totéž jako v předchozím bodě, přidejte však do položky seznamu CSS třídu dle pohlaví dané osoby.

```html
<li class="male">Petr (16)</li>
```
U nebinárních osob použijte CSS třídu `nonbinary`.