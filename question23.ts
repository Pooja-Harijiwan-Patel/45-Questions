let num: number = 10;
let str: string = "hello";
let bool: boolean = true;

// Test 1: Equality (True)
console.log("Is num === 10? I predict True.");
console.log(num === 10); // True - strict comparison of value and type

// Test 2: equality (False)
console.log("Is str === 'world'? I predict False.");
console.log(str === 'world'); // False - values are different

// Test 3: 
console.log("Is num != 10? I predict False");
console.log(num != 10); // False - loose comparison (not recommended)

// Test 4: Greater Than (False)
console.log("Is num > 20? I predict False.");
console.log(num > 20); // False

// Test 5: Greater Than or Equal (False)
console.log("Is str >= 'hello'? I predict False.");
console.log(str >= 'hello'); // False 

// Test 6: Logical AND (True)
console.log("Is num > 5 && bool? I predict True.");
console.log(num > 5 && bool); // True - both conditions must be true

// Test 7: Logical OR (True)
console.log("Is str === 'hello' || num === 0? I predict True.");
console.log(str === 'hello' || num === 0); // True - at least one condition must be true

// Test 8: Falsy Check (True)
console.log("Is '' ? I predict False (empty string is falsy).");
console.log('' ? true : false); // False - empty string is falsy

// Test 9: Nullish Check (False)
console.log("Is 0 ? I predict True.");
console.log(0 ? true : false); // True - 0 is truthy

// Test 10: Type Check (True)
console.log("Is typeof str === 'string'? I predict True.");
console.log(typeof str === 'string'); // True - checks the type of the variable