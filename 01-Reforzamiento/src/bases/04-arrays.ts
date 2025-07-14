const myArray: number[] = [1, 2, 3, 4, 5];

myArray.push(6);

console.log(myArray); // [1, 2, 3, 4, 5, 6]

const myArray2: number[] = structuredClone(myArray);

myArray2.push(7);

console.log(myArray2); // [1, 2, 3, 4, 5, 6, 7]