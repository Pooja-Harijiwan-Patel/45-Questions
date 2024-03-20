
function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`Great ${magician}`);
    }
    return greatMagicians;
}


function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original array of magicians
const magicians: string[] = [
    "David Copperfield",
    "Harry Houdini",
    "Penn Jillette",
    "David Blaine",
    "Criss Angel"
];


const greatMagicians: string[] = makeGreat([...magicians]);

// Show original magicians
console.log("Original Magicians:");
showMagicians(magicians);

// Show magicians with "Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
