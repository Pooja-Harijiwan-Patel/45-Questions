let animal: string[] = ["Cat", "Dog", "Rabbit"];

animal.forEach((item: string) => {
    console.log(` ${item}` );
});

console.log("----After Modification----")

console.log("All these animals are Mammals!")

animal.forEach((item: string) => {
    console.log(` ${item}, would make such a good pet` );
});
