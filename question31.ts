const usernames1: string[] = []; // Empty user list

if (usernames1.length === 0) {
  console.log("We need to find some users!");
} else {
  for (const username of usernames1) {
    if (username === "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}