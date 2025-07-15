const charactersNames = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

const [, cap, widow] = charactersNames;

console.log({cap, widow})

const returnArrayFn = () => ['abc', 123] as const;

const [letters, numbers] = returnArrayFn();

console.log(numbers + 100);