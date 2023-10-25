// speed, maxSpeed, engine,
// speedUp, slowDown, startEngine, stopEngine

// const auto = {
//     speed: 0,
//     maxSpeed: 160,
//     brand: 'BMW',
//     engine: false
// }

// factory function
function auto(brand, maxSpeed) {
    return {
        speed: 0,
        maxSpeed, // short object notation -> key = maxSpeed, value = maxSpeed - maxSpeed: maxSpeed: maxSpeed => maxSpeed
        brand,
        engine: false
    }
}

function startEngine(car){
    if (!car.engine){
        car.engine = true;
        console.log('Silnik odpalony!');
    } else {
        console.log('Silnik juź był odpalony')
    }
}

function stopEngine(car){
    if (car.speed === 0){
        car.engine = false;
        console.log('Silnik zgaszony')
    } else {
        console.log('Zatrzymaj furę wpierw')
    }
}

function speedUp(car, amount){
    if (car.engine) {
    // if (car.speed + amount <= car.maxSpeed) {
    // } else {
    //     car.speed = car.maxSpeed
    // }
    car.speed = Math.min(car.speed + amount, car.maxSpeed)
        console.log(`jedziesz z prędkością ${car.speed}`)
    } else {
        console.log('odpal silnik ziomuś')
    }
}

function slowDown(car, amount) {
    if (car.engine) {
        car.speed = Math.max(car.speed - amount, 0)
        console.log(`jedziesz z prędkością ${car.speed}`)
    } else {
        console.log()
    }
}

const bmw = auto('bmw', 160);
const toyota = auto('toyota', 198);

speedUp(bmw, 100);
startEngine(bmw);
speedUp(bmw, 50);
speedUp(bmw, 100);
speedUp(bmw, 100);
stopEngine(bmw);
slowDown(bmw, 100);
slowDown(bmw, 100);
stopEngine(bmw)