// function expression - przypisanie deklaracji funkcji do zmiennej
const doSmth = () => {};
const doSmth1 = function (){};
const doSmth2 = function name() {}; // nie robi się tak

// wariancje zapisu
const x = () => {}
const x1 = a => {} // tak nie rób
const x2 = (a, b) => {}

//ciało funkcji

const x3 = () => {}
const x4 = () => 42 // implicit return

// funkcja max, która zwraca najwięszy podany argument
// const max = (...digits) => {
//     let highest = digits[0];
//     for (const digit of digits.slice(1)) {
//         if (digit > highest) {
//             highest = digit;
//         }
//     }
//     return highest;
// }
//
// const max = (...digits) => digits.sort((a, b) => a -b).at(-1);
// console.log(max(1, 2, 3, 4, 5, 6));

//przyjmij obiekt z imieniem i wiekiem i zwróc nowy obiekt,
// w którym będzie jeszcze klucz active

const changeStatus = ({name, age}) => ({name, age, status: "active"});
// const changeStatus = (person) => ({...person, status: "active"}); --> krótsza wersja ze spread'em

const user = {name: "Janusz", age: 34}
console.log(changeStatus(user));


const x = [1, 2, 3, 4];

// spread operator -> rozprasza tablice lub obiekt
// ...x => 1 ,2, 3, 4,=> nie będzie działać, bo brakuje nawiasów
// [...x] => [1, 2, 3, 4] (shallow copy)
// [...x, ...x] => [1, 2, 3, 4, 1, 2, 3, 4]
// [x, x] => [[1, 2, 3, 4],[1,2,3,4]]

// rest operator with destructuring
const [a, b, ...rest] = x; // a = 1, b = 2, rest = [3, 4]
function name(a, b, ...digits) {} // a = 1, b = 2, digits = [3, 4, 5, 6]
name(1, 2, 3, 4, 5, 6)


