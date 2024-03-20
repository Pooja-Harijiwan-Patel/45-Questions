function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}
// Making sandwiches with different items
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Cutlet", "Swiss Cheese", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
