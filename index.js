const names = [
  { text: 'Alpha', value: 5 },
  { text: 'Beta', value: 2 },
  { text: 'Gamma', value: 4 },
];

//Checks if all elements in an array pass a test.
let everyResult = names.every((x) => x.value > 0); //true

// Checks if any of the elements in an array pass a test.
let someResult = names.some((x) => x.text === 'Alpha'); //true

// Returns the value of the first element in the array that passes a test.
let findResult = names.find((x) => x.text === 'Gamma'); //{text: "Gamma", value: 4}

// Creates an array filled with only the array elements that pass a test.
let filterResult = names.filter((x) => x.value > 3); //[{text: "Alpha", value: 5}, {text: "Gamma", value: 4}]

// Creates a new array with the results of a function applied to every element in the array.
let mapResult = names.map((x) => ({ ...x, value: x.value * 10 }));
//[{text: "Alpha", value: 50}, {text: "Beta", value: 20}, {text: "Gamma", value: 40}];

// Executes a provided function for each value of the array (from left-to-right). The returns a single value, the accumulator.
let reduceResult = names.reduce((accumulator, currentValue) =>
  currentValue.value > accumulator.value ? currentValue : accumulator
);
// Get the largest object by value: {"text":"Alpha","value":5}

// Modifies an array by sorting the items within an array. An optional compare function can be used to customize sort behavior. Use the spread operator to avoid mutation. [...arr].sort()
let sortResult = [...names].sort((a, b) => b.value - a.value);

// reverses the order of the elements in an array. Use the spread operator to avoid mutation. [...arr].reverse()
let reverseResult = [...names].reverse();

// Results
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
      <p>every: ${everyResult}</p>
      <p>some: ${someResult}</p>
      <p>find: ${JSON.stringify(findResult)}</p>
      <p>filter: ${JSON.stringify(filterResult)}</p>
      <p>map: ${JSON.stringify(mapResult)}</p>
      <p>reduce: ${JSON.stringify(reduceResult)}</p>
      <p>reverse: ${JSON.stringify(reverseResult)}</p>
      <p>sort: ${JSON.stringify(sortResult)}</p>`;

function solution(A) {
  let result = 1;
  // write your code in JavaScript (Node.js 8.9.4)
  // if(typeof(A) === 'Array')
  A.sort((a, b) => a - b);
  for (let i = 0; i < 10; i++) {
    result = A.find((x) => x !== i);
  }
  return result;
}
// console.log(solution([1, 2, 5, 6, 1, 2, 8, 9]));

// Array Map function
let numbers1 = [15, 2, 55, 5, 1, 9, 10];

// console.log(numbers1.map((number) => number * 2)); // Doubling each number in array => result is [30, 4, 110, 10, 2, 18, 20]

// Array Reduce function
let numbers2 = [15, 2, 55, 5, 1, 9, 10];
const initialValue = 0;
// console.log(numbers2.reduce((total, number) => total + number, initialValue)); // Adding all numbers2 in array => result is 97
// The array reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.

// Array Filter function
let numbers3 = [15, 2, 50, 55, 90, 5, 4, 9, 10];
// console.log(numbers3.filter((number) => number % 2 == 1)); // Filtering odd numbers3 => result is [15, 55, 5, 9]

// Array Sort function
let numbers5 = [15, 2, 50, 55, 90, 5, 4, 9, 10];
// console.log(numbers5.sort((num1, num2) => num1 - num2)); // Sorting numbers5 in accending order => result is [2, 4, 5, 9, 10, 15, 50, 55, 90]

// Chaining all above four functions(Map, Sort, Filter and Reduce funtions)
let numbers4 = [15, 2, 50, 55, 90, 5, 4, 9, 10];
let initialValue4 = 5;
const result = numbers4
  .map((number) => number * 2) // [30, 4, 100, 110, 180, 10, 8, 18, 20]//
  .sort((num1, num2) => num1 - num2) // [4, 8, 10, 18, 20, 30, 100, 110, 180]
  .filter((number) => number > 20) // [30, 100, 110, 180]
  .reduce((total, number) => total + number, initialValue4); //425

// console.log(result); // Answer is 425
