
const myPromise = new Promise<number>((resolve, reject) => { 
  setTimeout(() => {
    resolve(100);
    reject('Mala Paga.');
  }, 2000);
})

myPromise
.then((value) => {
  console.log(`Gracias por tu pago de ${value}  dólares.  ¡Eres un cliente excelente!   `);
})
.catch((error) => {
  console.error(`Error: ${error}`);
})
.finally(() => {
  console.log('¡Bye Bye!');
}
);