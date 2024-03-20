function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}

// Making sandwiches with different items
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Cutlet", "Swiss Cheese", "Avocado");
makeSandwich("Peanut Butter", "Jelly");
