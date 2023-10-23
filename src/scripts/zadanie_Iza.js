let countriesData = [
    {
        country: "Poland",
        capital: "Warsaw",
        language: "Polish",
        continent: "Europe"
    },
    {
        country: "United States",
        capital: "Washington, D.C.",
        language: "English",
        continent: "North America"
    },
    {
        country: "China",
        capital: "Beijing",
        language: "Chinese",
        continent: "Asia"
    },
    {
        country: "Brazil",
        capital: "Brasília",
        language: "Portuguese",
        continent: "South America"
    },
    {
        country: "Egypt",
        capital: "Cairo",
        language: "Arabic",
        continent: "Africa"
    },
    {
        country: "Australia",
        capital: "Canberra",
        language: "English",
        continent: "Australia"
    },
    {
        country: "Russia",
        capital: "Moscow",
        language: "Russian",
        continent: "Europe"
    },
    {
        country: "Kenya",
        capital: "Nairobi",
        language: "Swahili",
        continent: "Africa"
    },
    {
        country: "India",
        capital: "New Delhi",
        language: "Hindi",
        continent: "Asia" },
    {
        country: "Canada",
        capital: "Ottawa",
        language: "English",
        continent: "North America" },
    {
        country: "Argentina",
        capital: "Buenos Aires",
        language: "Spanish",
        continent: "South America"
    },
    {
        country: "Norway",
        capital: "Oslo",
        language: "Norwegian",
        continent: "Europe"
    },
    {
        country: "Japan",
        capital: "Tokyo",
        language: "Japanese",
        continent: "Asia"
    },
    {
        country: "Portugal",
        capital: "Lisbon",
        language: "portuguese",
        continent: "Europe"
    },

];
// Zadanie 1.
// Znajdź wszystkie kraje, w których językiem urzędowym jest angielski oraz portugalski.

function countryLanguages (country) {
//     let languages = [];
//
//     country.forEach((item) => {
//         if (item.language.charAt(0).toUpperCase() + item.language.slice(1) === 'Portuguese' || item.language === 'English') {
//             languages.push(item)
//         }
//     })
//     return languages;

    return country.filter((item) => ['Portuguese', 'portuguese', 'English'].includes(item.language));
}

console.log(countryLanguages(countries));


// Zadanie 2.
// Ile jest państw, które znajdują się w Afryce?

const countriesInAfrica = (countries) => {
    return countries.filter((item) => item.continent === 'Africa');
}

const africanCountries = countriesInAfrica(countries);
console.log(africanCountries.length);

// Zadanie 3.
// Znajdź wszystkie kraje, których stolicą jest Nairobi, Canberra oraz Warszawa.

function capitalOf(countries) {
    // let selectedCountries = [];
    //
    // countries.forEach((item) => {
    //     if (['Canberra', 'Nairobi', 'Warsaw'].includes(item.capital)) {
    //         selectedCountries.push(item.country);
    //     }
    // });
    //
    // return selectedCountries;

    return countries
        .filter((item) => ['Canberra', 'Nairobi', 'Warsaw'].includes(item.capital))
        .map((item) => item.country);
}

console.log(capitalOf(countries));