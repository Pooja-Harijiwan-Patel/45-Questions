var dinnerGuests = ["Eric", "John", "Tim"];
console.log("We found a bigger table! More guests can come!");
dinnerGuests.unshift("Kim");
dinnerGuests.splice(2, 0, "Rose");
// Use push() to add one new guest to the end of the list
// We can't use append() method because it's not yet compatible in js yet therefore to avoid this we use push instead
dinnerGuests.push("Jennnie");
// Print a new set of invitation messages
for (var _i = 0, dinnerGuests_1 = dinnerGuests; _i < dinnerGuests_1.length; _i++) {
    var guest = dinnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to a dinner party at my house."));
}
