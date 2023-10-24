"use strict";

// quirks mode
console.log(this);

function magic(){
    console.log(this)
}

magic(1)
magic.call({age: 42}, 2);
magic.call({name: "Janusz"}, 3)
magic.apply({city: "Krakow"}, [5]) // apply -> array
// this nie zalezy od miejsca zapisania ale od wywołania,
// jest dynamiczny (dynamiczny kontekst) run time a nie compilation time,
// this wskazuje na to co jest po kropce

const magic2 = magic.bind({elo: 666}); //bind tworzy calkowicie nowa funkcje
magic2(4);

//operujemy na zawartości zmiennej, wywołuje obiekt ktory jest wewnatrz

class Click {
    constructor(selector) {
        this.selector = selector;
        this.counter = 0;
    }
    click () {
        const tagRef = document.querySelector(this.selector);
        tagRef.addEventListener('click', (event) => { // problem rozwiązuje arrow function, ktora wskazuje na obiekt wyzej a nie na event
            event.preventDefault()
            this.counter++;
            console.log(this.counter);
        });
    }
}

// const tag = new Click('[type="submit]');
// tag.click()
// console.log(tag.selector);

String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1); // slice po kolejnym indeksie bierze resztę słowa, bo bez slice mamy tylko "A" a chcemy
}

'ala ma kota'.capitalize