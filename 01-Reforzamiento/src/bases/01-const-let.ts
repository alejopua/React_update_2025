// Reglas del clean code para el uso de const y let en TypeScript
// 1. Usa `const` por defecto para declarar variables que no cambian.
// 2. Usa `let` solo cuando necesites reasignar la variable.
// 3. Evita el uso de `var` para prevenir problemas de alcance y redefinición.
// 4. Utiliza nombres descriptivos para las variables, evitando abreviaciones innesarias, y en inglés para mantener la consistencia en el código.
//    Ejemplo: `const userName = 'John';
// 5. Agrupa las declaraciones de variables relacionadas para mejorar la legibilidad.


const fullName: string = 'Pedro Ramirez'; // Usar const porque no cambia
let age: number = 30; // Usar let porque puede cambiar
age = 31; // Reasignación válida

console.log({ fullName, age }); // Imprimir valores