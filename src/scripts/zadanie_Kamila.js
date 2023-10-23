let diving = [
    {
        name: "The Great Blue Hole",
        number_of_dives: 20000,
        depth: 124,
        dive_length: 40,
        country: "Belize"

    },

    {
        name: "The Great Barrier Reef",
        number_of_dives: 1000000,
        depth: 30,
        dive_length: 60,
        country: "Australia"

    },
    {
        name: "Galapagos",
        number_of_dives: 5000,
        depth: 30,
        dive_length:60,
        country: "Ecuador"

    },
    {
        name: "Palau",
        number_of_dives:5000,
        depth:40,
        dive_length:60,
        country: "Palau"

    },
    {
        name: "Cenotes",
        number_of_dives:100000,
        depth: 40,
        dive_length:50,
        country: "Mexico"

    },
    {
        name: "Blue Hole",
        number_of_dives:5000,
        depth: 80,
        dive_length:40,
        country: "Malta"

    },
    {
        name: "Kimbe Bay ",
        number_of_dives:8000,
        depth: 40,
        dive_length:50,
        country: "Papua New Guinea"

    },
    {
        name: "Maldives",
        number_of_dives:2000000,
        depth: 30,
        dive_length:60,
        country: "Maldives"

    },
    {
        name: "Red Sea ",
        number_of_dives:2000000,
        depth: 40,
        dive_length:60,
        country: ['Egypt', 'Jordan', 'Saudi Arabia']

    },
    {
        name: "Azores",
        number_of_dives:10000,
        depth: 40,
        dive_length:40,
        country: "Portugal"

    },
]

//Zadanie 1.
//Znajdź wszystkie miejsca nurkowe, w których długość nurkowania wynosi 50 min.

const placesWith50MinDive = diving.filter(place => place.dive_length === 50);
console.log(placesWith50MinDive);

//Zadanie 2.
//Zwróć obiekty zawierające więcej niż 1mln nurkowań.

const placesWithMillionDives = diving.filter(place => place.number_of_dives > 1000000);
console.log(placesWithMillionDives);
//Zadanie 3.
//Oblicz  średnią głębokość nurkowań  dla wszystkich obiektów.
const totalDepth = diving.reduce((sum, place) => sum + place.depth, 0), averageDepth = totalDepth / diving.length;
console.log(averageDepth);