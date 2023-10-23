rock_bands = [
    {
        "name": "The Beatles",
        "best_album": "Sgt. Pepper's Lonely Hearts Club Band",
        "members": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
        "most_popular_song": "Let It Be",
        "years_active": "1960-1970"
    },
    {
        "name": "Led Zeppelin",
        "best_album": "IV (Led Zeppelin IV)",
        "members": ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
        "most_popular_song": "Stairway to Heaven",
        "years_active": "1968-1980"
    },
    {
        "name": "Queen",
        "best_album": "A Night at the Opera",
        "members": ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
        "most_popular_song": "Bohemian Rhapsody",
        "years_active": "1970-1991"
    },
    {
        "name": "The Rolling Stones",
        "best_album": "Exile on Main St.",
        "members": ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
        "most_popular_song": "(I Can't Get No) Satisfaction",
        "years_active": "Since 1962"
    },
    {
        "name": "Pink Floyd",
        "best_album": "The Dark Side of the Moon",
        "members": ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"],
        "most_popular_song": "Wish You Were Here",
        "years_active": "1965-1995"
    },
    {
        "name": "The Who",
        "best_album": "Who's Next",
        "members": ["Roger Daltrey", "Pete Townshend", "John Entwistle", "Keith Moon"],
        "most_popular_song": "Baba O'Riley",
        "years_active": "Since 1964"
    },
    {
        "name": "U2",
        "best_album": "The Joshua Tree",
        "members": ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."],
        "most_popular_song": "With or Without You",
        "years_active": "Since 1976"
    },
    {
        "name": "Nirvana",
        "best_album": "Nevermind",
        "members": ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
        "most_popular_song": "Smells Like Teen Spirit",
        "years_active": "1987-1994"
    },
    {
        "name": "The Eagles",
        "best_album": "Hotel California",
        "members": ["Don Henley", "Glenn Frey", "Joe Walsh", "Timothy B. Schmit", "Don Felder"],
        "most_popular_song": "Hotel California",
        "years_active": "1971-1980, 1994-2016"
    },
    {
        "name": "The Jimi Hendrix Experience",
        "best_album": "Are You Experienced",
        "members": ["Jimi Hendrix", "Noel Redding", "Mitch Mitchell"],
        "most_popular_song": "Purple Haze",
        "years_active": "1966-1970"
    },
    {
        "name": "AC/DC",
        "best_album": "Back in Black",
        "members": ["Angus Young", "Malcolm Young", "Bon Scott", "Brian Johnson"],
        "most_popular_song": "Highway to Hell",
        "years_active": "Since 1973"
    },
    {
        "name": "The Doors",
        "best_album": "The Doors (debut album)",
        "members": ["Jim Morrison", "Ray Manzarek", "Robby Krieger", "John Densmore"],
        "most_popular_song": "Light My Fire",
        "years_active": "1965-1973"
    }
]
// 1. Jakie zespoły rockowe były aktywne w latach 80. XX wieku, zgodnie z informacjami dostępnymi w liście "rock_bands"?

function wasActiveIn80s(bands) {
    const bandsActive = [];

    for (const band of bands) {
        const activeYears = band.years_active;
        if (activeYears.includes("198" || "Since")) {
            bandsActive.push(band);
        }
    }
    return bandsActive;
}

const bandsActive = wasActiveIn80s(rock_bands);
console.log(wasActiveIn80s(bandsActive));





// 2. Które zespoły powielają nazwę kapeli "name" w  albumie "best_album"?

const matchingNames = rock_bands.filter(band => {
    return band.best_album.includes(band.name);
});

console.log(matchingNames);





// 3. Policz ilu artystów we wszystkich kapelach miało/ma na imie John

function allJohns(bands){
    let johns = 0;
    for (const band of bands) {
        for (const member of band.members){
            if (member.includes('John')) {
                johns++;
            }
        }
    }
    return johns;
}
const sumOfJohns = allJohns(rock_bands);
console.log(sumOfJohns)






