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


// the ...hasRandom is used to generate random numbers to protect the card of the first player which is Klaus.
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

  // Klaus specifies the wager and deadline and pays the wager into the contract.
  Klaus.only(() => {
      const wager = declassify(interact.wager);
      const deadline = declassify(interact.deadline);
  });
  Klaus.publish(wager, deadline)
      .pay(wager)
  commit();

  // Elena accepts the wager and tarnsfers it into the contract.
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

      // Klaus makes his move and publishes it.
      Klaus.only(() => {
          const _cardsKlaus = interact.getCard();
          const [_commitKlaus, _saltKlaus] = makeCommitment(interact, _cardsKlaus);
          const commitKlaus = declassify(_commitKlaus);
      });
      Klaus.publish(commitKlaus)
          .timeout(relativeTime(deadline), () => closeTo(Elena, informTimeOut));
      commit();

      //This code ensures every atempt by Elena to know Klaus' hand would be rejected.
      unknowable(Elena, Klaus(_cardsKlaus, _saltKlaus));

      // Elena makes her move and publishes it.
      Elena.only(() => {
          const cardsElena = declassify(interact.getCard());  
      });
      Elena.publish(cardsElena)
          .timeout(relativeTime(deadline), () => closeTo(Klaus, informTimeOut))
      commit();

      // We publish Klaus' hand and the salt.
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