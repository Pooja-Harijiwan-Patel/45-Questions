var famous_Magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "David Blaine",
    "Criss Angel"
];
function show_Magicians() {
    console.log(famous_Magicians);
}
function make_great() {
    famous_Magicians.forEach(function (item) {
        console.log("Great ".concat(item, "."));
    });
}
show_Magicians();
console.log("==========================");
make_great();
