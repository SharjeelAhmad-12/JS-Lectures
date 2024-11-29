// Higher-Order Functions Examples in JavaScript
// 1. forEach() - Executes a provided function once for each array element.
const numbersForEach = [1, 2, 3, 4];
numbersForEach.forEach((num, index) => {
    // This function is executed for each element
    // 'num' is the current element, and 'index' is the position of the element in the array
    console.log(`Index ${index}: ${num}`);
});
// Output will be:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4


// 2. map() - Creates a new array populated with the results of calling a provided function on every element in the array.
const numbersMap = [1, 2, 3];
const doubled = numbersMap.map(num => {
    // The provided function multiplies each element (num) by 2
    return num * 2;
});
console.log(doubled);  // Output will be: [2, 4, 6]


// 3. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
const numbersFilter = [1, 2, 3, 4];
const evenNumbers = numbersFilter.filter(num => {
    // This function checks if the element is even
    return num % 2 === 0;
});
console.log(evenNumbers);  // Output will be: [2, 4]


// 4. reduce() - Applies a function against an accumulator and each element to reduce it to a single value.
const numbersReduce = [1, 2, 3, 4];
const sum = numbersReduce.reduce((accumulator, num) => {
    // The function adds each element (num) to the accumulator (acc)
    return accumulator + num;
}, 0);  // The initial value for the accumulator is 0
console.log(sum);  // Output will be: 10



// 5. reduceRight() - Works like reduce() but processes the array from right to left.
const numbersReduceRight = [1, 2, 3, 4];
const sumRight = numbersReduceRight.reduceRight((accumulator, num) => {
    // The function adds each element to the accumulator, but it iterates from right to left
    return accumulator + num;
}, 0);
console.log(sumRight);  // Output will be: 10


// 6. find() - Returns the first element in the array that satisfies the provided testing function.
const numbersFind = [1, 2, 3, 4];
const firstEven = numbersFind.find(num => {
    // This function returns the first even number in the array
    return num % 2 === 0;
});
console.log(firstEven);  // Output will be: 2



// 7. findIndex() - Returns the index of the first element that satisfies the provided testing function.
const numbersFindIndex = [1, 2, 3, 4];
const firstEvenIndex = numbersFindIndex.findIndex(num => {
    // This function returns the index of the first even number in the array
    return num % 2 === 0;
});
console.log(firstEvenIndex);  // Output will be: 1



// 8. some() - Tests whether at least one element in the array passes the provided testing function.
const numbersSome = [1, 2, 3, 4];
const hasEven = numbersSome.some(num => {
    // This function checks if there is at least one even number in the array
    return num % 2 === 0;
});
console.log(hasEven);  // Output will be: true



// 9. every() - Tests whether all elements in the array pass the provided testing function.
const numbersEvery = [1, 2, 3, 4];
const allEven = numbersEvery.every(num => {
    // This function checks if every number in the array is even
    return num % 2 === 0;
});
console.log(allEven);  // Output will be: false


// 10. sort() - Sorts the elements of an array in place and returns the sorted array.
const numbersSort = [3, 1, 4, 2];
numbersSort.sort((a, b) => {
    // This function sorts numbers in ascending order
    return a - b;
});
console.log(numbersSort);  // Output will be: [1, 2, 3, 4]



// 11. flat() - Flattens a nested array into a single array.
const nestedArray = [1, [2, 3], [4, 5]];
const flattened = nestedArray.flat();
console.log(flattened);  // Output will be: [1, 2, 3, 4, 5]


// 12. flatMap() - Maps each element using a mapping function, then flattens the result into a new array.
const nestedArrayFlatMap = [1, 2, 3];
const flattenedMapped = nestedArrayFlatMap.flatMap(num => {
    // This function doubles each element and flattens the result
    return [num, num * 2];
});
console.log(flattenedMapped);  // Output will be: [1, 2, 2, 4, 3, 6]


// 13. includes() - Checks if the array contains a certain element.
const numbersIncludes = [1, 2, 3, 4];
const hasThree = numbersIncludes.includes(3);
console.log(hasThree);  // Output will be: true


// 14. indexOf() - Returns the index of the first occurrence of a specified element.
const numbersIndexOf = [1, 2, 3, 4];
const index = numbersIndexOf.indexOf(3);
console.log(index);  // Output will be: 2


// 15. concat() - Combines two or more arrays into a single array.
const array1 = [1, 2];
const array2 = [3, 4];
const combined = array1.concat(array2);
console.log(combined);  // Output will be: [1, 2, 3, 4]