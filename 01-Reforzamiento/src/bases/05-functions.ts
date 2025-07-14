// FUNCIONES DE FLECHA:
// 1. No cambian el valor de 'this'.
//    El valor de 'this' dentro de una función de flecha es el mismo que en el contexto donde fue creada. No se ve afectado por cómo se llama la función.
// 2. No se pueden usar como constructores.
//    Las funciones de flecha no pueden ser usadas con 'new', lo que evita errores accidentales de instanciación.
// 3. Sintaxis más concisa.
//    Permiten escribir funciones de manera más corta y clara, especialmente para callbacks o funciones pequeñas.
// 4. No tienen argumentos propios.
//    No poseen el objeto 'arguments', lo que puede evitar confusiones en el manejo de parámetros.
// 5. Ideales para callbacks.
//    Son especialmente útiles como callbacks, ya que mantienen el contexto de 'this' y evitan la necesidad de usar .bind(this).

// FUNCIONES TRADICIONALES:
// 1. Pueden ser usadas como constructores con la palabra clave 'new'.
// 2. Tienen su propio objeto 'arguments', útil para manejar parámetros variables.
// 3. Permiten cambiar el contexto de 'this' usando métodos como call, apply o bind.
// 4. Son más claras para definir métodos en objetos o clases tradicionales.
// 5. Pueden ser nombradas, lo que ayuda en el stack trace y la recursividad.

const greetArrow = (name: string): string => `Hello, ${name}!`;
console.log(greetArrow('ArrowFunction'))

function greetTraditional (name: string): string {
    return `Hello, ${name}!`;
}
console.log(greetTraditional('TraditionalFunction'))

function objectoFunction(): { name: string; age: number } {
    return {
        name: 'Pedro',
        age: 30
    }   
}
console.log(objectoFunction())

const objectArrow = (): {name: string; age: number} => {
    return {
        name: 'Alejandro',
        age: 29
    }
}
console.log(objectArrow())