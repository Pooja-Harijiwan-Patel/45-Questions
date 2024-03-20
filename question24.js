var colors = ["Red", "Blue", "Green", "Cyan", "Neon", "Black"];
var favourite_number = 30;
var favourite_color = "Black";
var itemToCheck = "White";
var isNotInArray = true;
//Test:1 Equality
console.log("Is favourite number === 30? I predict True");
console.log(favourite_number === 30);
//Test:2 Unequality
console.log("Is favourite_color === pink?I predict False");
console.log(favourite_color === "pink");
//Test:3 LowerCase()
console.log("Is favourite_color first character in lower case? I predict False");
console.log(favourite_color.toLowerCase());
//Test:4 Mathematical
console.log("Is favourite number == 40?I predict False");
console.log(favourite_number === 40);
//Test5: 
console.log("Is fav number !== 30? I predict False");
console.log(favourite_number !== 30);
//Test6:
console.log("Is favourite number greater than 10? I predict True");
console.log(favourite_number > 10);
//Test7:
console.log("Is favourite less than 50? i predict True");
console.log(favourite_number < 50);
//Test8:
console.log("Is favourite number greater than or equal to 30? I predict it True");
console.log(favourite_number >= 30);
//Test:9:
console.log("Is favourite number less than equal to 50? I predict it to be True");
console.log(favourite_number <= 50);
//Test10:
console.log("Using OR condition! I predict it to be False");
console.log(colors[1] === "Cyan" || colors[4] === "Red");
//Test11:
console.log("Using And operator! I predict it to be true");
console.log(colors[5] === "Black" && favourite_color === "Black");
//Test:13
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var item = colors_1[_i];
    if (item === itemToCheck) {
        isNotInArray = false;
        break;
    }
}
console.log("Is item NOT in the array? I predict True.");
console.log(isNotInArray);
