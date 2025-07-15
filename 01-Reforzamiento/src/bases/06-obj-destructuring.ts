interface Person {
    name: string;
    age: number;
    key: string;
    city?: string; // Optional property
}

const person: Person = {
    name: 'Tony',
    age: 30,
    key: 'Ironman'
}

const useContext = ({name, age, key, city}: Person) => {
    return {
        KeyName: key,
        user: {
            name,
            age
        },
        city: 'New York'
    }
}

const {KeyName, user:{name}} = useContext(person);
console.log({KeyName, name})