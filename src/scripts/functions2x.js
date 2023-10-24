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




