const btnRef = document.querySelector('form button[type="submit"]');
const inputRefs = [...document.querySelectorAll('form input[id^="digit-"]')]
const resultsRef = document.querySelector ('#results')

const isNotEmpty = (value) => value.trim() !== '';
const isNotAllEmpty = (inputs) => inputs.every(isNotEmpty);

const isInteger = (value) => !isNaN(parseInt(value));
const isAllIntegers = (inputs) => inputs.every(isInteger);

const isInRange = (value) => value >= 1 && value <= 49;
const isAllInRange = (inputs) => inputs.every(isInRange);

const isNotRedundant = (digits) => digits.length === new Set(digits).size; // sprawdzenie czy liczby się powtarzają, jeśli tak to zwraca false i trzeba zmeinić na inne cyfry

const drawDigits = (amount = 6) => {
    const temp= [];
    while (temp.length < amount) {
        const digit = Math.floor(Math.random() * 48 + 1) // losowanie liczb z zakresu 1-49
        if (!temp.includes(digit)) {
            temp.push(digit)
        }
    }
    return temp;
}

const checkHits = (userDigits, drawnDigits) => {
    const hits = []

    for (const digit of userDigits){
        if (drawnDigits.includes(digit)) {
            hits.push(digit);
        }
    }
    return hits;

}

const showResults = (hits) => {
    let message = '';

    if (hits.legth === 0) {
        message += "Spróbój jeszcze raz. Na pewno wygrasz! "
    } else {
        message += `Wygrałeś! Trafiłeś ${hits.length} liczb. Twoje liczby to ${hits.join (", ")}`
    }
    resultsRef.innerText = message;
}


btnRef.addEventListener('click', function(event){
    event.preventDefault();
   const values = inputRefs.map((input) => input.value);

   if (isNotAllEmpty(values)) {
       if (isAllIntegers(values)) {
           const digits = values.map((value) => parseInt(value))
           if (isAllInRange(digits)) {
               if (isNotRedundant(digits)) {
                   const drawnDigits = drawDigits();
                   const hits = checkHits(digits, drawnDigits);
                   showResults(hits);

               } else {
                   console.log("powtarzasz się")
               }
           } else {
               console.log("są liczby sposa zakresu")
           }

       } else {
           console.log("to nie są liczby, ziomeczku")
       }
   } else {
       console.log('pola są puste')
   }
});


function becomeMillionaire(){
    const userDigits = [12, 23, 14, 25, 37, 8];
    let counter6 = 0
    let counter5 = 0

    for ( let i = 0; i < 100000000; i++){
        const hits = checkHits(userDigits, drawDigits());
        if (hits.length === 6) { counter6++}
        if (hits.length === 5) { counter5++}
    }

    return `Wydałeś 300 dużych baniek. Wygrałeś ${counter6 * 300000} PLN. Trafiłeś 6: ${counter6} i 5: ${counter5}`
}