
//Here we define a function to access our state.....

const selectAccount = (state) => (state.appState.account);

const selectContractAddress = (state) => (state.appState.contractAddress);

const selectPlayerCard = (state) => (state.appState.playerCard);

const selectOpponentCard = (state) => (state.appState.opponentCard);

const selectReach = (state) => (state.appState.reach);

const selectReachBackend = (state) => (state.appState.reachBackend);



export default {
    selectAccount,
    selectContractAddress,
    selectPlayerCard,
    selectOpponentCard,
    selectReach,
    selectReachBackend
};