let guestList: string[] = ["Eric", "John", "Tim", "Min","Rose"];


console.log("Initial set of invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would like to invite you to party!`);
});

const guestCantMakeIt: string = "Tim";
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);


const newInvitee: string = "Eve";


const index = guestList.indexOf(guestCantMakeIt);
if (index !== -1) {
    guestList.splice(index, 1, newInvitee);
}


console.log("Updated set of invitations:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
