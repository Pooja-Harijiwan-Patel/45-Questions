let dinnerGuests1: string[] = ["Eric", "John", "Tim", "Min", "Rose", "Jennie"];

console.log("Unfortunately, the new table won't arrive on time. I can only invite two people for dinner.");


while (dinnerGuests1.length > 2) {
  const uninvitedGuest = dinnerGuests1.pop();
  if (uninvitedGuest) {
    console.log(`Sorry, ${uninvitedGuest}, but due to space limitations, I can't invite you to dinner this time.`);
  }
}


const remainingGuests = dinnerGuests1;
for (const guest of remainingGuests) {
  console.log(`Dear ${guest}, you're still invited to dinner!`);
}


console.log("\nFinal guest list:", dinnerGuests1);