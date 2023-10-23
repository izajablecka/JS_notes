// const user = {
//     name: "Przemysław",
//     score: 0,
//     updateScore(newScore) {
//         user.score += newScore;
//     }
// }
//
// const user2 = {
//     name: "Jarosław",
//     score: 0,
//     updateScore(newScore) {
//         user2.score += newScore;
//     }
// }

// function user(name) {
//     return {
//         name: name,
//         score: 0,
//         updateScore(newScore) {
//         this.score += newScore;
//         }
//     }
// }
//
// user1 = user("Jarosław");
// user2 = user("Jarosław")
//
// user1.updateScore(666);
// console.log(user1);
// console.log(user2);

function User(name) {
    this.name = name;
    this.score = 0;
}

User.prototype.updateScore = function(newScore){
    this.score += newScore;
}

// const user = new User("Jarosław");
// user.updateScore(666);
// console.dir(user);

Array.prototype.pawelFilter = function (cb){
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
}
// const arr = [1, 2, 3]
// const result = arr.pawelFilter((element, idx, arr) => element > 2);
// console.log(result);

// function pawelFilter(data) {
//     const res = []
//
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] > 2) {
//             res.push(data[i])
//         }
//     }
// }
String.prototype.title = function (){
    return this[0].toUpperCase() + this.slice(1);
}

// myMap

Array.prototype.myMap = function (fn) {
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(fn(this[i], i, this))
        // const result = fn(this[i], i, this)
        // temp.push(result)
    }
    return temp;
}


// syntactic sugar
class Book {
    constructor(isbn, name) {
        this.isbn = isbn;
        this.name = name;
    }

    read(){
        return this.name.slice(0, 5);
    }
}


function Book1(isbn, name){
    this.isbn = isbn;
    this.name = name;
}

Book1.prototype.read = function() {
    return this.name.slice(0, 5);
}













