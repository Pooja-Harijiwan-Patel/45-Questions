const famous_Magicians: string[] = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette", 
    "David Blaine",
    "Criss Angel"
];

function show_Magicians(){
console.log(famous_Magicians);
}

function make_great(){
    famous_Magicians.forEach((item: string) => {
        console.log(`Great ${item}.`);
    });
    
}

show_Magicians()
console.log("==========================")
make_great()