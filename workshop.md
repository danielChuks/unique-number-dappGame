# 2.0 Workshop: Unique Number Game

In this workshop i would work you through the details of my submitted Hack game "unique number game".

This workshop, takes into consideration the fact that you have indeed complete the reach tutorial.

We assume that you’ll go through this workshop in a directory named `~/reach/workshop-unique-number-dappgame:`
```bash
$ mkdir -p ~/reach/workshop-unique-number-dappgame
```

And that you have a copy of Reach installed in ~/reach so you can write
```bash
  $../reach version
```
This should run reach successfuly

It is best to start off by initialzing your reach program by runing the following:
```bash
  $.../reach init
```

# 2.0.1 Problem Analytics

The first step to implementing any application or provide any solution to a problem is to do what we call problem analytics.
This problem analyitics entails defining the general scope of the issue and how we intend to solve the problem with our application.
You should also write your own answers in your Reach program (index.rsh) using a comment. /* Remember comments are written like this. */


      Who is involved in this application?

      What information are they to provide at the start of the game

      How do we avoid cheating from both parties

      What funds change ownership in the game should there be a draw or a winner 

**Stop!** Write down the problem description as a comment 

      My game involves two player: one player starts the game another joins the game 

      Creator of the game stipulate the amount or price they want to set for each round of the game and the other player accept the said amount staked by the creator

      Creator won't know any other information about the game so also the other player.

      Express rule of the game are outlined to the players and what they need too win is clear.

      The funds change ownership when there is a winner 
      
It actually okay if your answers differs from mine, if you are confident your answers are correct you can proceed with this workshop.

# 2.0.2 Data Definition

In the next context of this workshop, we would be going through definition of data types equivalents of the values we used in our answers from the previous section. Also, in this step we'll be deciding what functions our participants will have.

   * What functions/ values does Klaus need to start the game?
   * What functions/ values do Elena need to end the game?

You should relate back at your problem analysis to embark on this steps. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

**Stop!**

Write down the data definitions for this program as definitions.

It's time to see our answers!


```javascript
  
  const Player = {
      ...hasRandom,
      getCard: Fun([], UInt),
      viewResult: Fun([UInt], Null),
      informTimeOut: Fun([], Null),
      informDraw: Fun([], Null),
}

 const Klaus = Participant('Klaus', {
      ...Player,
      wager: UInt,
      deadline: UInt,
  }
  
  const Elena = Participant('Elena', {
      ...Player,
      acceptWager: Fun([UInt], Null),
  }
```
We are going to represent the cost of the wager and the deadline with UInt (unsigned integer). Klaus will set these two values after creating the contract. There is a function that gives Elena the choice of accepting or rejecting the wager set by Klaus.

# 2.0.3 Communication construction.

Now we can design the structure of communication of our application. Try to write this part considering the process of Klaus setting the price and Elena picking her number please note card in this context, represent numbers picked by both players so cards and numbers would be used interchangeably in this workshop.

**Stop**

Write down the communication pattern for this program as comments.

Here's what we wrote

> 1. Klaus sets the wager and deadline and deploy the contract.
> 2. Elena accepts the wager and joins the game.
> 3. As long as both player are unble to pick ghost which represent the unique number,
>     1. Klaus picks a number 
>     2  Elena picks a number
>     3. Klaus informs the contract what he picks.
>     4. Elena informs the contract what she picks.
>     7. The contract calculates the outcome  of this round and check through what each of the players picked and check if it correspnds with the expected unique number value which is represented by the character ghost..
  
The phrase "As long as" indicates a loop going on in the game. Considering players would keep playing as long as both players fails to get the unique number.Given that, this information will be enough to implement the logic for the contract.  

**Stop!**
Write down the communication pattern for this program as code.

Main logic of our contract should now look like:

```javascript
  const [isCards, GHOST, WITCH, MOUSE, PAWN] = makeEnum(4);
  const [isResults, KLAUS_WIN, DRAW, ELENA_WIN] = makeEnum(3);
  
  
  const winner = (cardsKlaus, cardsElena) =>{
      if(cardsKlaus === GHOST && cardsElena === GHOST){
        return DRAW; // which is 1
      }
      else if(cardsKlaus === GHOST){
        return KLAUS_WIN //which is 0

      }else if (cardsElena === GHOST){
        return ELENA_WIN; //which is 2

      }else{
        return DRAW; // which is 1
      }
};

```

# 2.0.4 Assertion Insertion
The assertion takes into consideraion the multiple possible outcome of the game. so we verify the winner of the game by using assert to vet all possible outcome of the game.
```javascript
assert(winner(GHOST, WITCH) == KLAUS_WIN);
assert(winner(WITCH, GHOST) == ELENA_WIN);
assert(winner(GHOST, PAWN) == KLAUS_WIN);
assert(winner(PAWN, GHOST) == ELENA_WIN);
assert(winner(MOUSE, PAWN) == DRAW);
assert(winner(MOUSE, PAWN) == DRAW);
assert(winner(MOUSE, WITCH) == DRAW);
assert(winner(PAWN,  WITCH) == DRAW);
assert(winner(GHOST, GHOST) == DRAW);

//Get wager from Klaus. Klaus pays the wager amount to the contract.
Klaus.only(() => {
      const wager = declassify(interact.wager);
  });
  Klaus.publish(wager)
      .pay(wager)
  commit();
  
//Elena accepts the wager and pays the wager amount to the contract.
Elena.only(() => {
      interact.acceptWager(wager);
  });
  Elena.pay(wager)
  
 // While loop that only terminates after a player wins
  var result = DRAW;
  invariant (balance() === 2 * wager);
  while (result === DRAW) {
      commit();
      
// Klaus picks his card and publishes it.
      Klaus.only(() => {
          const cardsKlaus = interact.getCard();
      });
      Klaus.publish(cardsKlaus)
      commit();
      
 // Elena makes her move next to pick her card and publishes it.
      Elena.only(() => {
          const cardsElena = declassify(interact.getCard());  
      });
      Elena.publish(cardsElena)
      commit();

```
In the above line of codes we defined the values that would represent the current outcome of the game using makeEnum (```'isResult'```).
We also defined a function (```winner```) that calculates the current outcome of the game by vetting of the number that was published by both players. 

If the number Klaus picks (```_cardKlaus```) is not the predefined unique number ghost and the card Elena picks (```_cardElena```) is not also the predefined number then the game contiues else one player gets the unique nnuber right the game terminates.

In addition to our assertion we define our loop like this:
```javascript
// While loop that only terminates after a player wins
  var result = DRAW;
  invariant (balance() === 2 * wager);
  while (result === DRAW) {
      commit();
```

# In Addition

So far, our code works  fine but there are some points we need to improve.
One improvement is to enforce a timeout limit on each player to make sure that they don't take too long to play their move or worse abandon a game midway. Of course, we will need a means to inform both players when a timeout occurs. For that, we will define a function thus:

```javascript
  const informTimeOut = () => {
      each([Klaus, Elena], () => {
        interact.informTimeOut();
      } );
  };
  
 ```

To implement the timeout, we will use the ```deadline``` value that Klaus created the contract with. 

The timeout will be enforced when - 

* Klaus makes picks his card
```javascript
     // Klaus specifies the wager and deadline and pays the wager into the contract.
  Klaus.only(() => {
      const wager = declassify(interact.wager);
      const deadline = declassify(interact.deadline);
  });
  Klaus.publish(wager, deadline)
      .pay(wager)
  commit();
      
* Elena picks her card and publishes it..

// Elena makes her move and publishes it.
    Elena.only(() => {
      interact.acceptWager(wager);
  });
  Elena.pay(wager)
      .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut));
```

We can improve this code by making sure every attempt by Elena to know Klaus card is rejected:
```javascript  
  
      // Klaus makes his move picks his card and publishes it.
      Klaus.only(() => {
          const _cardsKlaus = interact.getCard();
          const [_commitKlaus, _saltKlaus] = makeCommitment(interact, _cardsKlaus);
          const commitKlaus = declassify(_commitKlaus);
      });
      Klaus.publish(commitKlaus)
          .timeout(relativeTime(deadline), () => closeTo(Elena, informTimeOut));
      commit();
  }

```

//This code ensures every attempt by Elena to know Klaus' card would be rejected.
 ```javascript
      unknowable(Elena, Klaus(_cardsKlaus, _saltKlaus));
```

```javascript
 // Elena makes her move and publishes it.
      Elena.only(() => {
          const cardsElena = declassify(interact.getCard());  
      });
      Elena.publish(cardsElena)
          .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut))
      commit();
```

In addition we would then include the salt to the card of Klaus to ensure his card is protected from any malicious attack of Elena.

```javascript
    // We publish Klaus' card and the salt.
      Klaus.only(() => {
          const saltKlaus = declassify(_saltKlaus);
          const cardsKlaus =declassify(_cardsKlaus);
      });
      Klaus.publish(saltKlaus, cardsKlaus)
          .timeout(relativeTime(deadline), ()=> closeTo(Elena, informTimeOut));

      checkCommitment(commitKlaus, saltKlaus, cardsKlaus);

      // calculate the outcome and continue the loop if its a draw.
      const outcome = winner(cardsKlaus, cardsElena);

      if (outcome === DRAW) {
          informDraw();
      }

      result = winner(cardsKlaus, cardsElena);

      continue;
  }

```
With all this changes our backend would look something this.

```javascript
  'reach 0.1';

const [isCards, GHOST, WITCH, MOUSE, PAWN] = makeEnum(4);
const [isResults, KLAUS_WIN, DRAW, ELENA_WIN] = makeEnum(3);

const winner = (cardsKlaus, cardsElena) =>{
  if(cardsKlaus === GHOST && cardsElena === GHOST){
    return DRAW; // which is 1
  }
  else if(cardsKlaus === GHOST){
    return KLAUS_WIN //which is 0

  }else if (cardsElena === GHOST){
    return ELENA_WIN; //which is 2

  }else{
    return DRAW; // which is 1
  }
};

assert(winner(GHOST, WITCH) == KLAUS_WIN);
assert(winner(WITCH, GHOST) == ELENA_WIN);
assert(winner(GHOST, PAWN) == KLAUS_WIN);
assert(winner(PAWN, GHOST) == ELENA_WIN);
assert(winner(MOUSE, PAWN) == DRAW);
assert(winner(MOUSE, PAWN) == DRAW);
assert(winner(MOUSE, WITCH) == DRAW);
assert(winner(PAWN,  WITCH) == DRAW);
assert(winner(GHOST, GHOST) == DRAW);

const Player = {
  ...hasRandom,
  getCard: Fun([], UInt),
  viewResult: Fun([UInt], Null),
  informTimeOut: Fun([], Null),
  informDraw: Fun([], Null),
}
export const main = Reach.App(() => {
  const Klaus = Participant('Klaus', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Elena = Participant('Elena', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const informTimeOut = () => {
      each([Klaus, Elena], () => {
        interact.informTimeOut();
      } );
  };
  const informDraw = () => {
    each([Klaus, Elena], () => {
        interact.informDraw();
    });
  };
  const viewResult = (result) => {
    each([Klaus, Elena], () => {
        interact.viewResult(result);
    });
  }

  Klaus.only(() => {
      const wager = declassify(interact.wager);
      const deadline = declassify(interact.deadline);
  });
  Klaus.publish(wager, deadline)
      .pay(wager)
  commit();

  Elena.only(() => {
      interact.acceptWager(wager);
  });
  Elena.pay(wager)
      .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut));

  var result = DRAW;
  invariant (balance() === 2 * wager);
  while (result === DRAW) {
      commit();

      Klaus.only(() => {
          const _cardsKlaus = interact.getCard();
          const [_commitKlaus, _saltKlaus] = makeCommitment(interact, _cardsKlaus);
          const commitKlaus = declassify(_commitKlaus);
      });
      Klaus.publish(commitKlaus)
          .timeout(relativeTime(deadline), () => closeTo(Elena, informTimeOut));
      commit();

      unknowable(Elena, Klaus(_cardsKlaus, _saltKlaus));

      Elena.only(() => {
          const cardsElena = declassify(interact.getCard());  
      });
      Elena.publish(cardsElena)
          .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut))
      commit();

      Klaus.only(() => {
          const saltKlaus = declassify(_saltKlaus);
          const cardsKlaus =declassify(_cardsKlaus);
      });
      Klaus.publish(saltKlaus, cardsKlaus)
          .timeout(relativeTime(deadline), ()=> closeTo(Elena, informTimeOut));

      checkCommitment(commitKlaus, saltKlaus, cardsKlaus);

      const outcome = winner(cardsKlaus, cardsElena);

      if (outcome === DRAW) {
          informDraw();
      }

      result = winner(cardsKlaus, cardsElena);

      continue;
  }

  const [forKlaus, forElena] =
        result == KLAUS_WIN ? [2, 0]:
        result == ELENA_WIN ? [0, 2]:
              /* tie      */ [1, 1];
      
  transfer(forKlaus * wager).to(Klaus);
  transfer(forElena * wager).to(Elena);

  viewResult(result);

  commit();

  exit();
});
```

## Interaction Introduction
Now that we have a complete contract, we can write the frontend. Since we'll be interacting with an API to play the actual unique number game, using a web frontend library is a better choice. In our case it will be React and For state management, the redux library was used.
Please note React-router was used in the project to route between pages and other components of the react project.

**Stop!**
Insert `interact` calls to the [frontend](https://docs.reach.sh/ref-model.html#(tech._frontend)) into the program.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as reachBackend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import Mnemonic from './components/keyphrase/keyphrase';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({providerEnv: 'MainNet', MyAlgoConnect }));


const HomePage = ({reach, reachBackend}) => {
    const [accout, setAccount] = useState({})

    const connectToDefaultAccount = async () => {
        const userAccount =  await reach.getDefaultAccount();
        setAccount(userAccount);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(reach)
        dispatch(updateReach(reach));
        dispatch(updateReachBackend(reachBackend));
    },[]);

const Information = () => {
    const [isloading, setIsloading] = useState(true);
    const navigate = useNavigate();
    const reach = useSelector(selectors.selectReach);
    const dispatch = useDispatch();
    const connectedWithMnemonic = useSelector(selectors.selectConnectedWithMnemonic);

    const connectAccount = async () => {
        try {
            const account = await reach.getDefaultAccount();
            dispatch(updateAccount(account));;
            setIsloading(false);
        } catch (error) {
            navigate('/connection-error');
        }
    }

    useEffect(() =>{
        if (!connectedWithMnemonic) {
            connectAccount();
        }
        else {
            setIsloading(false);
        }
    }, [])

const Mnemonic = () => {
    const [contractField, setContractField] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reach = useSelector(selectors.selectReach);

    const handleChange = (event) => {
        setContractField(event.target.value);
        setDisplayError(false)
    }

    const onSubmit = async () => {
        try {
            const account = await reach.newAccountFromMnemonic(contractField.trim());
            
            dispatch(updateAccount(account));
            dispatch(updateConnectedWithMnemonic(true))

            navigate('/information');
        }
        catch(error) {
            setDisplayError(true);
        }

    }

    return (
        Enter your Mnemonic Key Phrase
                        displayError
                            ? Invalid key phrase
                            : null })}

const ContractCreated = () => {
    const dispatch = useDispatch();
    const contractAddress = useSelector(selectors.selectContractAddress);
    const wager = useSelector(selectors.selectWager);
    const account = useSelector(selectors.selectAccount);
    const reachBackend = useSelector(selectors.selectReachBackend);
    const currentPlayer = useSelector(selectors.selectCurrentPlayer)
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const createContract = async () => {
        const getCard = async () => {
            dispatch(updateIsToPlay(true))
            return await new Promise((resolve) => {
                if (!/daemon/.test(window.location.href)){
                    navigate('/daemon');
                }

                dispatch(updatePromise(resolve));
            })
        }

        const viewResult = (result) => {
            if (result == 0) {
                navigate('/win');
            }
            else if (result == 1) {
                alert("It is a draw! Playing another round to determine winner.");
            }
            else if (result == 2){
                navigate('/lose');
            }
            else {
                alert(result);
            }
        }

        const random = () => {
            return Math.floor((Math.random() * 1000))
        }

        const interactInterface = {
            ...Interact,
            getCard,
            wager,
            deadline: 120,
            random,
            viewResult,
        };

        const contract = account.contract(reachBackend);
        reachBackend.Klaus(contract, interactInterface);

        const address = JSON.stringify(await contract.getInfo());

        dispatch(updateContractAddress(address));
        dispatch(updateCurrentPlayer("Klaus"));

        setIsLoading(false);
    }

    useEffect(() => {
        createContract();
    }, [])

const CtcInfo = () => {
    const [wager, setWager] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        setWager(event.target.value);
    }
    
    const handleSubmit = () => {
        dispatch(updateWager(wager));
        navigate('/contract-created');
    }

    return input wager value
}

const AccInfo = () => {
    const [contractField, setContractField] = useState('');
    const [displayError, setDisplayError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reachBackend = useSelector(selectors.selectReachBackend);
    const account = useSelector(selectors.selectAccount);
    const currentPlayer = useSelector(selectors.selectCurrentPlayer)

    const handleChange = (event) => {
        setContractField(event.target.value);
        setDisplayError(false)
    }

    const acceptWager = (wager) => {
        alert('Accept wager of ' + wager+ '?');
    }

    const getCard = async () => {
        dispatch(updateIsToPlay(true));
        return await new Promise((resolve) => {
            dispatch(updatePromise(resolve));
        })
    }

    const viewResult = (result) => {
        if (result == 0) {
            navigate('/lose');
        }
        else if (result == 1) {
            alert("It is a draw! Playing another round to determine winner.");
        }
        else if (result == 2){
            navigate('/win');
        }
        else {
            alert(result);
        }
    }


    const onSubmit = async () => {
        try {
            setIsLoading(true);
            dispatch(updateCurrentPlayer("Elena"))

            const contract = await account.contract(reachBackend, JSON.parse(contractField));

            const interacInterface = {
                ...interact,
                getCard,
                acceptWager,
                viewResult,
            };

            reachBackend.Elena(contract, interacInterface);

            navigate('/daemon');
        }
        catch(error) {
            setIsLoading(false);
            setDisplayError(true);
        }

    }
    const DaemonGame = () => {
    const CARDS = ['Ghost', 'Witch', 'Mouse', 'Pawn'];
    const [cardOrder, setCardOrder] = useState(shuffleNumbers());
    const [valueOrder, setValueOrder] = useState(shuffleNumbers());

    const promise = useSelector(selectors.selectPromise);
    const dispatch = useDispatch();
    const isToPlay = useSelector(selectors.selectIsToPlay);
    const [displayCard, setDisplayCard] = useState(false)
    const [cardPlayed, setCardPlayed] = useState(CARDS[0]);
    const currentPlayer = useSelector(selectors.selectCurrentPlayer)

    const handleGamePlay = (value) => {
        try {
            shuffleCards();
            
            promise.resolve(value);
            console.log("You selected "+value);
            dispatch(updateIsToPlay(false));
            dispatch(updatePromise({}));
            setCardPlayed(CARDS[value]);
            setDisplayCard(true);

            // shuffleCards();
            
        } catch(err) {
            alert("It is not your turn to play. Hold on.")
            console.log(err)
        }
    };

    function shuffleNumbers () {
        let first = Math.floor(Math.random() * 3);
        let second = first;

        while (second === first) {
            second = Math.floor(Math.random() * 3);
        }

        let third = second;

        while (third === second || third === first) {
            third = Math.floor(Math.random() * 3);
        }

        let fourth = 6 - (first + second + third);

        return [first, second, third, fourth];
    };


```

## Discussion
Please take into consideration that this workshop gives you the overview functionality with respect to code structure of unique number game i deccided to make it this way to give you that overview i believe strongly in code spliting and as such the code and file base of this project are some what lengthy and spilted  so if you would want to reproduce this exactly as it was created, you can go through the repo of this project.


Congrats for making it to the end of the workshop. You succeeded in implementing the Unique number game to run on the blockchain all by yourself!

The same concept can be implemented for a wide variety of board games like chess, checkers etc.

If you found this workshop rewarding, please let us know on [the Discord community](https://discord.gg/AZsgcXu)!
If you want to know what to do next, you should check out squidKid's [Tic-Tac-Toe](https://github.com/squidKid-deluxe/reach--tic-tac-toe) and other workshops.
(There should be the link of squid's workshop too)
See you around 😉

