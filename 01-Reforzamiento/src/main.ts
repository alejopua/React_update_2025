import './style.css'
// import './bases/01-const-let'
// import './bases/02-templete-string'
// import './bases/03-object-literal'
// import './bases/04-arrays'
// import './bases/05-functions'
// import './bases/06-obj-destructuring'
// import './bases/07-array-destructuring'
import { getHeroesByOwner } from './bases/08-imp-exp'
import { Owner } from './bases/data/heroes.data';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="read-the-docs">
      Hello World! 
    </h1>
  </div>
`

console.log(getHeroesByOwner(Owner.DC));

