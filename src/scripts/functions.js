function sum(a ,b) {
    return a + b;
}

const result = sum(1, 2);
// console.log(result);
// console.log(sum(1 ,2));

// napisz funkcję która zwraca "Cześć, Janusz", przy czym Janusz to paramentr

function sayHello(name) {
    return "Cześć, " + name;
}

// console.log(sayHello("Janusz"));

function getDayName(day) {
    return ['niedziela', "poniedziałek", "wtorek"][day]
}
console.log(getDayName(0));

//wylosuj 6 liczb bez powtórzeń z zakresu 1-49

// const temp= [];
//
// function drawDigits() {
//     for (let i = 0; i < 6; i++) {
//         const digit = Math.floor(Math.random() * 48 + 1)
//         if (!temp.includes(digit)) {
//             temp.push(digit);
//         } else {
//             i--;
//         }
//     }
// }
//
// console.log(drawDigits()); // []

function drawDigits(quantity) {
    const temp = [];
    while (temp.length < quantity) {
        const digit = Math.floor(Math.random() * 48 + 1);
        if (!temp.includes(digit)) {
            temp.push(digit)
        }
    }
    return temp;
}

console.log(drawDigits(6));

//fn do zwracania intersection 2 tablic

function intersection(array1, array2) {
    const result = [];
   for (const item of array1) {  // for...of...
       if (array2.includes(item)) {
           result.push(item);
       }
   }
    return result;
}
console.log(intersection([1, 2, 3, 4], [2, 4, 11]))

function intersection(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }
    return result;
}
console.log(intersection([1, 2, 3, 4], [2, 4, 11]))

//myLord - Witaj mój Panie!, Co jeszcze mogę dla Ciebie zrobić,
// Pięknie dzisiaj wyglądasz!

function myLord() {
    const array = ["Witaj mój Panie!", "Co jeszcze mogę dla Ciebie zrobić", "Pięknie dzisiaj wyglądasz!"];
    return array[Math.round(Math.random() * (array.length - 1))]
}
console.log(myLord())