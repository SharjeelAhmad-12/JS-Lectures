// 1. forEach() - Executes a provided function once for each array element.
const arrayForEach = [1, 2, 3, 4];
arrayForEach.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4


// 2. map() - Creates a new array populated with the results of calling a provided function on every element in the array.
const arrayMap = [1, 2, 3];
const doubled = arrayMap.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]


// 3. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
const arrayFilter = [1, 2, 3, 4, 5];
const evenNumbers = arrayFilter.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]



// 4. reduce() - Applies a function against an accumulator and each element to reduce it to a single value.
const arrayReduce = [1, 2, 3, 4];
const sum = arrayReduce.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 10



// 5. reduceRight() - Similar to reduce(), but it processes the array from right to left.
const arrayReduceRight = [1, 2, 3, 4];
const sumRight = arrayReduceRight.reduceRight((acc, current) => acc + current, 0);
console.log(sumRight); // Output: 10



// 6. find() - Returns the first element in the array that satisfies the provided testing function.
const arrayFind = [1, 2, 3, 4];
const firstEven = arrayFind.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2



// 7. findIndex() - Returns the index of the first element that satisfies the provided testing function.
const arrayFindIndex = [1, 2, 3, 4];
const firstEvenIndex = arrayFindIndex.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1


// 8. some() - Tests whether at least one element in the array passes the provided testing function.
const arraySome = [1, 2, 3, 4];
const hasEven = arraySome.some(num => num % 2 === 0);
console.log(hasEven); // Output: true


// 9. every() - Tests whether all elements in the array pass the provided testing function.
const arrayEvery = [1, 2, 3, 4];
const allEven = arrayEvery.every(num => num % 2 === 0);
console.log(allEven); // Output: false


// 10. sort() - Sorts the elements of an array in place and returns the sorted array.
const arraySort = [3, 1, 4, 2];
arraySort.sort((a, b) => a - b); // Sorting in ascending order
console.log(arraySort); // Output: [1, 2, 3, 4]


// 11. flat() - Flattens a multi-dimensional array into a single-level array.
const nestedArray = [1, [2, 3], [4, 5]];
const flatArray = nestedArray.flat();
console.log(flatArray); // Output: [1, 2, 3, 4, 5]


// 12. flatMap() - Maps each element using a mapping function, then flattens the result into a new array.
const arrayFlatMap = [1, 2, 3];
const flatMapped = arrayFlatMap.flatMap(num => [num, num * 2]);
console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6]


// 13. includes() - Checks if the array contains a certain element.
const arrayIncludes = [1, 2, 3, 4];
const hasThree = arrayIncludes.includes(3);
console.log(hasThree); // Output: true


// 14. indexOf() - Returns the index of the first occurrence of a specified element.
const arrayIndexOf = [1, 2, 3, 4];
const index = arrayIndexOf.indexOf(3);
console.log(index); // Output: 2


// 15. concat() - Combines two or more arrays into a single array.
const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log(combined); // Output: [1, 2, 3, 4]


// 16. slice() - Returns a shallow copy of a portion of an array into a new array.
const arraySlice = [1, 2, 3, 4, 5];
const slicedArray = arraySlice.slice(1, 4); // Extracts elements from index 1 to index 3 (not inclusive of index 4)
console.log(slicedArray); // Output: [2, 3, 4]


// 17. splice() - Adds/removes elements from an array at a specific index.
const arraySplice = [1, 2, 3, 4, 5];
arraySplice.splice(2, 2, 'a', 'b'); // Starting from index 2, remove 2 elements and add 'a' and 'b'
console.log(arraySplice); // Output: [1, 2, 'a', 'b', 5]


// 18. join() - Joins all elements of an array into a single string.
const arrayJoin = [1, 2, 3, 4];
const joinedString = arrayJoin.join('-');
console.log(joinedString); // Output: "1-2-3-4"


// 19. reverse() - Reverses the elements of an array in place.
const arrayReverse = [1, 2, 3, 4];
arrayReverse.reverse();
console.log(arrayReverse); // Output: [4, 3, 2, 1]


// 20. push() - Adds one or more elements to the end of an array and returns the new length.
const arrayPush = [1, 2, 3];
const newLength = arrayPush.push(4, 5);
console.log(arrayPush); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5


// 21. pop() - Removes the last element from an array and returns it.
const arrayPop = [1, 2, 3];
const poppedElement = arrayPop.pop();
console.log(arrayPop); // Output: [1, 2]
console.log(poppedElement); // Output: 3


// 22. shift() - Removes the first element from an array and returns it.
const arrayShift = [1, 2, 3];
const shiftedElement = arrayShift.shift();
console.log(arrayShift); // Output: [2, 3]
console.log(shiftedElement); // Output: 1


// 23. unshift() - Adds one or more elements to the beginning of an array and returns the new length.
const arrayUnshift = [2, 3];
const newLengthUnshift = arrayUnshift.unshift(1);
console.log(arrayUnshift); // Output: [1, 2, 3]
console.log(newLengthUnshift); // Output: 3


// 24. copyWithin() - Copies a section of the array to another position in the array.
const arrayCopyWithin = [1, 2, 3, 4, 5];
arrayCopyWithin.copyWithin(2, 0, 2); // Copy elements from index 0 to 2 and paste it at index 2
console.log(arrayCopyWithin); // Output: [1, 2, 1, 2, 5]


// 25. fill() - Fills a section of the array with a specific value.
const arrayFill = [1, 2, 3, 4];
arrayFill.fill(0, 1, 3); // Fill from index 1 to 2 with 0
console.log(arrayFill); // Output: [1, 0, 0, 4]