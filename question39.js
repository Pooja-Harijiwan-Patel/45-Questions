function city_country(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\"".concat(city, " , ").concat(country, "\""));
}
city_country();
city_country("Lahore");
city_country("Italy", "Paris");
city_country("Sydney", "Australia");
city_country("Seoul", "South Korea");
