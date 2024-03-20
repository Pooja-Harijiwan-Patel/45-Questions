var current_users = ["admin", "Alice", "bob"];
var new_users = ["john", "JOHN", "Charlie", "Alice"];
var _loop_1 = function (new_user) {
    var userNameToLower = new_user.toLowerCase(); // Convert to lowercase for case-insensitive check
    if (current_users.some(function (user) { return user.toLowerCase() === userNameToLower; })) {
        console.log("".concat(new_user, ", this username is already taken. Please choose another."));
    }
    else {
        console.log("".concat(new_user, ", this username is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
