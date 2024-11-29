//  JavaScript String Methods with Detailed Examples

// 1. charAt() - Returns the character at the specified index
let str1 = "Hello";
console.log(str1.charAt(1)); // Output: e

// Explanation: The character at index 1 (0-based) in "Hello" is 'e'.
// 2. charCodeAt() - Returns the Unicode value of the character at the specified index
console.log(str1.charCodeAt(1)); // Output: 101
// Explanation: The Unicode of 'e' is 101.


// 3. concat() - Combines two or more strings
let str2 = "World";
console.log(str1.concat(", ", str2)); // Output: Hello, World
// Explanation: Combines "Hello" and "World" with a comma and a space in between.


// 4. includes() - Checks if a string contains a specified substring
let sentence1 = "JavaScript is fun";
console.log(sentence1.includes("fun")); // Output: true
// Explanation: The substring "fun" is found in "JavaScript is fun".


// 5. endsWith() - Checks if a string ends with a specified substring
console.log(sentence1.endsWith("fun")); // Output: true
// Explanation: The string "JavaScript is fun" ends with "fun".

// 6. indexOf() - Returns the index of the first occurrence of a substring
console.log(sentence1.indexOf("is")); // Output: 11
// Explanation: The word "is" starts at index 11 in "JavaScript is fun".


// 7. lastIndexOf() - Returns the index of the last occurrence of a substring
let repeatStr = "hello, hello, hello!";
console.log(repeatStr.lastIndexOf("hello")); // Output: 13
// Explanation: The last occurrence of "hello" starts at index 13.


// 8. match() - Matches a string against a regular expression and returns an array
console.log(repeatStr.match(/hello/g)); // Output: ["hello", "hello", "hello"]
// Explanation: Finds all occurrences of "hello" in the string.


// 9. replace() - Replaces the first occurrence of a substring with another
console.log(repeatStr.replace("hello", "hi")); // Output: hi, hello, hello!
// Explanation: Only the first "hello" is replaced with "hi".


// 10. replaceAll() - Replaces all occurrences of a substring with another
console.log(repeatStr.replaceAll("hello", "hi")); // Output: hi, hi, hi!
// Explanation: All occurrences of "hello" are replaced with "hi".


// 11. slice() - Extracts part of a string and returns it
let str3 = "Hello, World!";
console.log(str3.slice(7, 12)); // Output: World
// Explanation: Extracts characters from index 7 to 12 (excluding 12).


// 12. split() - Splits a string into an array based on a separator
let csv = "a,b,c,d";
console.log(csv.split(",")); // Output: ["a", "b", "c", "d"]
// Explanation: Splits the string by commas into an array.


// 13. startsWith() - Checks if a string starts with a specified substring
console.log(str3.startsWith("Hello")); // Output: true
// Explanation: The string "Hello, World!" starts with "Hello".


// 14. substr() - Extracts a substring from a string (deprecated but still works)
console.log(str3.substr(7, 5)); // Output: World
// Explanation: Extracts 5 characters starting from index 7.


// 15. substring() - Extracts a substring between two indices
console.log(str3.substring(7, 12)); // Output: World
// Explanation: Extracts characters from index 7 to 12 (excluding 12).


// 16. toLowerCase() - Converts the string to lowercase
console.log(str3.toLowerCase()); // Output: hello, world!
// Explanation: Converts all characters to lowercase.


// 17. toUpperCase() - Converts the string to uppercase
console.log(str3.toUpperCase()); // Output: HELLO, WORLD!
// Explanation: Converts all characters to uppercase.


// 18. trim() - Removes whitespace from both ends of the string
let paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim()); // Output: Hello, World!
// Explanation: Removes spaces from the start and end of the string.


// 19. trimStart() - Removes whitespace from the start of the string
console.log(paddedStr.trimStart()); // Output: Hello, World!
// Explanation: Removes spaces only from the beginning.


// 20. trimEnd() - Removes whitespace from the end of the string
console.log(paddedStr.trimEnd()); // Output:    Hello, World!
// Explanation: Removes spaces only from the end.


// 21. valueOf() - Returns the primitive value of a string object
let strObj = new String("Hello");
console.log(strObj.valueOf()); // Output: Hello
// Explanation: Converts the string object to its primitive string value.


// 22. repeat() - Repeats the string a specified number of times
console.log(str1.repeat(3)); // Output: HelloHelloHello
// Explanation: Repeats the string "Hello" three times.


// 23. padStart() - Pads the string with another string at the start
let numStr = "5";
console.log(numStr.padStart(3, "0")); // Output: 005
// Explanation: Adds zeros to the start until the string length is 3.


// 24. padEnd() - Pads the string with another string at the end
console.log(numStr.padEnd(3, "0")); // Output: 500
// Explanation: Adds zeros to the end until the string length is 3.


// 25. localeCompare() - Compares two strings in the current locale
let str4 = "apple";
let str5 = "banana";
console.log(str4.localeCompare(str5)); // Output: -1
// Explanation: Returns -1 because "apple" comes before "banana" alphabetically.


// 26. search() - Searches for a substring using a regular expression
let sentence2 = "JavaScript is awesome";
console.log(sentence2.search("awesome")); // Output: 15
// Explanation: Finds the index where "awesome" starts.


// 27. toString() - Converts an object to a string
console.log(strObj.toString()); // Output: Hello
// Explanation: Converts the string object to a primitive string.