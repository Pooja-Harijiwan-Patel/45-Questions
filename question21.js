var countries = [
    {
        name: "Pakistan",
        capital: "Islamabad",
    },
    {
        name: "India",
        capital: "Delhi",
    },
    {
        name: "United States",
        capital: "Washington D.C",
    },
    {
        name: "Australia",
        capital: "Canberra",
    }
];
console.log("Here are some countries and their capitals:");
for (var _i = 0, countries_1 = countries; _i < countries_1.length; _i++) {
    var country = countries_1[_i];
    console.log("Country: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("------------------");
}
