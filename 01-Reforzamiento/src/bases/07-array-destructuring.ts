const charactersNames = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

const [, cap, widow] = charactersNames;

console.log({cap, widow})

const returnArrayFn = () => ['abc', 123] as const;

const [letters, numbers] = returnArrayFn();

console.log(numbers + 100);

// Exercise
const useState = (name: string) => {
    return [name, (newName: string) => console.log(newName)] as const
}

const [name, setName] = useState('Goku');
console.log({name});
setName('Pachito');