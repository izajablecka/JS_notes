const disneyMovies = [
    {
        title: "The Lion King",
        releaseYear: 1994,
        duration: 88,
        mainCharacters: ["Simba", "Mufasa", "Scar", "Nala"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 2,
            otherAwards: 5,
        },
    },
    {
        title: "Beauty and the Beast",
        releaseYear: 1991,
        duration: 84,
        mainCharacters: ["Belle", "Beast", "Gaston", "Lumière"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 2,
            otherAwards: 6,
        },
    },
    {
        title: "Aladdin",
        releaseYear: 1992,
        duration: 90,
        mainCharacters: ["Aladdin", "Jasmine", "Genie", "Jafar"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 1,
            otherAwards: 4,
        },
    },
    {
        title: "101 Dalmatynczyków",
        releaseYear: 1961,
        duration: 79,
        mainCharacters: ["Pongo", "Perdita", "Cruella de Vil"],
        awardsInfo: {
            academyAwards: 1,
            goldenGlobes: 0,
            otherAwards: 1,
        },
    },
    {
        title: "Cinderella",
        releaseYear: 1950,
        duration: 74,
        mainCharacters: ["Cinderella", "Prince Charming", "Fairy Godmother"],
        awardsInfo: {
            academyAwards: 3,
            goldenGlobes: 0,
            otherAwards: 2,
        },
    },
    {
        title: "Moana",
        releaseYear: 2016,
        duration: 107,
        mainCharacters: ["Moana", "Maui", "Tala", "Heihei"],
        awardsInfo: {
            academyAwards: 0,
            goldenGlobes: 1,
            otherAwards: 3,
        },
    },
    {
        title: "The Little Mermaid",
        releaseYear: 1989,
        duration: 83,
        mainCharacters: ["Ariel", "Prince Eric", "Ursula", "Sebastian"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 0,
            otherAwards: 3,
        },
    },
    {
        title: "Toy Story",
        releaseYear: 1995,
        duration: 81,
        mainCharacters: ["Woody", "Buzz Lightyear", "Jessie", "Rex"],
        awardsInfo: {
            academyAwards: 0,
            goldenGlobes: 1,
            otherAwards: 6,
        },
    },
    {
        title: "Pocahontas",
        releaseYear: 1995,
        duration: 81,
        mainCharacters: ["Pocahontas", "John Smith", "Meeko"],
        awardsInfo: {
            academyAwards: 2,
            goldenGlobes: 1,
            otherAwards: 1,
        },
    },
    {
        title: "Zootopia",
        releaseYear: 2016,
        duration: 108,
        mainCharacters: [
            "Judy Hopps",
            "Nick Wilde",
            "Chief Bogo",
            "Mayor Lionheart",
        ],
        awardsInfo: {
            academyAwards: 1,
            goldenGlobes: 1,
            otherAwards: 4,
        },
    },
];


// //1. Ile lat temu miała premiere najstarsza bajka?
//
// const currentYear = new Date().getFullYear();
// const oldestMovie = disneyMovies.reduce((oldest, movie) => (movie.releaseYear < oldest.releaseYear ? movie : oldest), disneyMovies[0]);
// const yearsAgo = currentYear - oldestMovie.releaseYear;
// console.log(yearsAgo)

1. Ile dni temu miała premiere najstarsza bajka?

const currentYear = new Date().getFullYear();
const today = new Date();
const oldestMovie = disneyMovies.reduce((oldest, movie) => (
    movie.releaseYear < oldest.releaseYear ? movie : oldest
), disneyMovies[0]);
const releaseDate = new Date(oldestMovie.releaseYear, 0, 1);
const daysAgo = Math.floor((today - releaseDate) / (1000 * 60 * 60 * 24));
console.log(daysAgo);


//2. Czy wszystkie filmy otzrymały jakąkolwiek nagrodę?

const awardAllMovies = disneyMovies.every((movie) => (Object.values(movie.awardsInfo).some((count) => count > 0)));
console.log(awardAllMovies);

//3. Jaka litera powtarza się najczęściej w imionach głównyyh bohaterów?

const characterNames = disneyMovies.flatMap((movie)=> movie.mainCharacters.join('').toLowerCase());
const charCountMap = new Map();

for (const name of characterNames) {
    for (const char of name) {
        if (/^[a-z]$/.test(char)) {
            charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
        }
    }
}
let mostCommonLetter = "";
let mostCommonCount = 0;

for (const [char, count] of charCountMap.entries()) {
    if (count > mostCommonCount) {
        mostCommonLetter = char;
        mostCommonCount = count;
    }
}

console.log(mostCommonLetter)