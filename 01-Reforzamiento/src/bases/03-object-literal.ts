// Object Literals

interface Hero {
    fullName: string;
    age: number;
    power: string[];
    address: Address;
}

interface Address {
    city: string;
    country: string;
}

const ironman: Hero = {
    fullName: 'Tony Stark',
    age: 45,
    power: ['Intelligence', 'Wealth', 'Iron Suit'],
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const spiderman: Hero = structuredClone(ironman);
spiderman.fullName = 'Peter Parker';
spiderman.age = 18;
spiderman.power = ['Spider-Sense', 'Wall-Crawling', 'Web-Shooting'];
spiderman.address.city = 'Queens';

console.log(ironman);
console.log(spiderman);