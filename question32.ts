const current_users: string[] = ["admin", "Alice", "bob"];
const new_users: string[] = ["john", "JOHN", "Charlie", "Alice"];

for (const new_user of new_users) {
  const userNameToLower = new_user.toLowerCase(); // Convert to lowercase for case-insensitive check
  if (current_users.some(user => user.toLowerCase() === userNameToLower)) {
    console.log(`${new_user}, this username is already taken. Please choose another.`);
  } else {
    console.log(`${new_user}, this username is available.`);
  }
}