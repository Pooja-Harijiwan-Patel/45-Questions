var dinnerGuests1 = ["Eric", "John", "Tim", "Min", "Rose", "Jennie"];
console.log("Unfortunately, the new table won't arrive on time. I can only invite two people for dinner.");
while (dinnerGuests1.length > 2) {
    var uninvitedGuest = dinnerGuests1.pop();
    if (uninvitedGuest) {
        console.log("Sorry, ".concat(uninvitedGuest, ", but due to space limitations, I can't invite you to dinner this time."));
    }
}
var remainingGuests = dinnerGuests1;
for (var _i = 0, remainingGuests_1 = remainingGuests; _i < remainingGuests_1.length; _i++) {
    var guest = remainingGuests_1[_i];
    console.log("Dear ".concat(guest, ", you're still invited to dinner!"));
}
console.log("\nFinal guest list:", dinnerGuests1);
