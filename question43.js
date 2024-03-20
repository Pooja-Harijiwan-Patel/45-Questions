var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("Great ".concat(magician));
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Original array of magicians
var magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "David Blaine",
    "Criss Angel"
];
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Show original magicians
console.log("Original Magicians:");
showMagicians(magicians);
// Show magicians with "Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
