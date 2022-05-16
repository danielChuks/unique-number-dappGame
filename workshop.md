# 2.0 Workshop: Unique Number Game

In this workshop i would work you through the details of my submitted Hack game "unique number game".

This workshop, takes into consideration of the fact that you have indeed complete the reach tutorial.

We assume that you’ll go through this workshop in a directory named `~/reach/workshop-unique-number-dappgame:`
```bash
$ mkdir -p ~/reach/workshop-unique-number-dappgame
```

And that you have a copy of Reach installed in ~/reach so you can write
```bash
  $../reach version
```
This should run reach successfuly

It best to start off by initialzing your reach program by runing the following:
```bash
  $.../reach init
```

# 2.0.1 Problem Analysis

The first step to implementing any application or provide any solution to a problem is to do what we call problem analytics.
This problem analyitics entails defining the general scope of the issue and how we intend to sove the problem this problem with our application.
You should also write your own answers in your Reach program (index.rsh) using a comment. /* Remember comments are written like this. */


      Who is involved in this application?

      What information are they to provide at the start of the game

      How do we avoid cheating from both parties

      What funds change ownership in the game should there be a draw or a winner 

**Stop!** Write down the problem description as a comment 

      My game involves two player: one player starts the game another enact or join the game 

      Creator of the game stipulate the amount or price they want to set for a each round of the game and the other player accept the said amount staked by the creator

      Creator won't know any other information about the game so also the other player.

      Express rule of the game are outlined to the players and what they need too win is clear.

      The funds change ownership when there is a winner 
      
It actually okay if your answers differs from mine, if you are confident your answers are correct you can proceed with this workshop.

# 2.0.2 Data Definition

In the next context of this workshop, we would be going through thorogh definition of data types equivalents of the values we used in our answers from the previous section. Also, in this step we'll be deciding what functions our participants will have.

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

# 2.0.3 Communication consruction.

Now we can design the structure of communication of our application. Try to write this part considering how the process of creator setting the price and player playing the move would go.

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
The assertion takes into consideraion the multiple possible outcome of the game. so we verify the winner of the game by using assert to vet all possible outocme of the game.
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

//Get wager and and deadline from Klaus. Klaus pays the wager amount to the contract also.
Klaus.only(() => {
      const wager = declassify(interact.wager);
      const deadline = declassify(interact.deadline);
  });
  Klaus.publish(wager, deadline)
      .pay(wager)
  commit();
//Elena accepts the wager and pays the wager amount to the contract.
Elena.only(() => {
      interact.acceptWager(wager);
  });
  Elena.pay(wager)
      .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut));
      
 // While loop that only terminates after a player wins
  var result = DRAW;
  invariant (balance() === 2 * wager);
  while (result === DRAW) {
      commit();
      
// Klaus picks his card and publishes it.
      Klaus.only(() => {
          const _cardsKlaus = interact.getCard();
          const [_commitKlaus, _saltKlaus] = makeCommitment(interact, _cardsKlaus);
          const commitKlaus = declassify(_commitKlaus);
      });
      Klaus.publish(commitKlaus)
          .timeout(relativeTime(deadline), () => closeTo(Elena, informTimeOut));
      commit();
      
 // Elena makes her move next to pick her card and publishes it.
      Elena.only(() => {
          const cardsElena = declassify(interact.getCard());  
      });
      Elena.publish(cardsElena)
          .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut))
      commit();

```
In the above line of codes we defined the values that would represent the current outcome of the game using makeEnum (```'isResult'```).
We also defined a function (```winner```) that calculates the current outcome of the game by vetting of the number that was published by both players. 

If the number Klaus picks (```_cardKlaus```) is not the predefined unique number ghost and the card Elena picks (```_cardElena```) is not also the predefined number then the game contiues else one player gets the unique nnuber right the game terminates.

# 2.0.5 Assertion Insertion

In addition to our assertion we define our loop like this:
```javascript
// While loop that only terminates after a player wins
  var result = DRAW;
  invariant (balance() === 2 * wager);
  while (result === DRAW) {
      commit();
```






     
      
