// Object Literals
const ironman = {
    fullName: 'Tony Stark',
    age: 45,
    powers: ['Intelligence', 'Wealth', 'Iron Suit'],
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const spiderman = structuredClone(ironman);
spiderman.fullName = 'Peter Parker';
spiderman.age = 18;
spiderman.powers = ['Spider-Sense', 'Wall-Crawling', 'Web-Shooting'];
spiderman.address.city = 'Queens';

console.log(ironman);
console.log(spiderman);