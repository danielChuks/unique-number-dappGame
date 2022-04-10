import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accKlaus = await stdlib.newTestAccount(startingBalance);
const accElena = await stdlib.newTestAccount(startingBalance);

console.log('Welcome to the Daemon Game !');

console.log('Launching Daemon....');

//this helps in desplaying curency in up to 4 deecimal place.
const fmt = (x) => stdlib.formatCurrency(x, 4);

//we get the balance and the apply the fmt function to it also a helpful function for getting the balance of a participant and displaying it with up to 4 decimal places.
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeKlaus = await getBalance(accKlaus);
const beforeElena = await getBalance(accElena);

const ctcKlaus = accKlaus.contract(backend);
const ctcElena = accElena.contract(backend, ctcKlaus.getInfo());

const CARDS = ['ghost','witch', 'mouse', 'pawn']

const RESULT = ['Klaus wins', 'Draw', 'Elena wins'];

const Player = (who) => ({
  ...stdlib.hasRandom,
  getCard: async () => {
    const cards = Math.floor(Math.random() * 3);
    console.log(`${who} picked ${CARDS[cards]}`)
      if(Math.random() <= 0.01){
        for(i = 0; i < 5; i++){
          console.log(`${who} takes his time sending it back....`);
          await stdlib.wait(1);
        }
      }
    return cards
  },
  viewResult: (result) =>{
    console.log(`${who} saw outcome ${RESULT[result]}`);
  },
  informTimeOut: () => {
    console.log(`${who} observed a timeout`);
  },
  informDraw: () => {
    console.log(`${who} saw outcome draw. Playing another round to determine winner.`);
  }
})

console.log('Initializing Application Backend');

await Promise.all([
    backend.Klaus(ctcKlaus,{
      ...Player('Klaus'),
      wager: stdlib.parseCurrency(10),
      //here klaus included a deadline of 10 block 
      deadline: 5
    }),
  
  backend.Elena(ctcElena,{
    ...Player('Elena'),
    acceptWager: async (amt) => {
        console.log(`Elena accept the wager of ${fmt(amt)}.`)
    }
  }),
]);

const afterKlaus = await getBalance(accKlaus);
const afterElena = await getBalance(accElena);

console.log(`Klaus went from ${beforeKlaus} to ${afterKlaus}`)
console.log(`Elena went from ${beforeElena} to ${afterElena}`)

console.log('...Daemon feast closed ....');