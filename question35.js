var animal = ["Cat", "Dog", "Rabbit"];
animal.forEach(function (item) {
    console.log(" ".concat(item));
});
console.log("----After Modification----");
console.log("All these animals are Mammals!");
animal.forEach(function (item) {
    console.log(" ".concat(item, ", would make such a good pet"));
});
