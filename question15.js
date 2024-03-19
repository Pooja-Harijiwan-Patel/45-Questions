var guestList = ["Eric", "John", "Tim", "Min", "Rose"];
console.log("Initial set of invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to invite you to party!"));
});
var guestCantMakeIt = "Tim";
console.log("\nUnfortunately, ".concat(guestCantMakeIt, " can't make it to the dinner.\n"));
var newInvitee = "Eve";
var index = guestList.indexOf(guestCantMakeIt);
if (index !== -1) {
    guestList.splice(index, 1, newInvitee);
}
console.log("Updated set of invitations:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
