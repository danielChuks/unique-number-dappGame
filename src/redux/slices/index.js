import {createSlice} from '@reduxjs/toolkit'


export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState:{
        account: {},
        contractAddress: '',
        playerCard: 0,
        opponentCard: 0,
        reach: '{}',
        reachBackend: '{}',
        wager: 0,
        promise: {
            resolve: {}
        },
        currentPlayer: 'KLAUS',
        isToPlay: false,
        connectedWithMnemonic: false,
    },

    reducers: {
        updateAccount: (state, action) => {
            state.account = action.payload;
        },
        updateContractAddress: (state, action) => {
            state.contractAddress = action.payload;
        },

        updatePlayerCard: (state, action) => {
            state.playerCard = action.payload;
        },
        updateOpponenCard: (state, action) => {
            state.opponentCard = action.payload;
        },
        updateReach:(state, action)=>{
            state.reach = (action.payload);
        },
        updateReachBackend: (state, action)  =>{
            state.reachBackend = (action.payload);
        },
        updateWager: (state, action) => {
            state.wager = action.payload;
        },
        updatePromise: (state, action) => {
            state.promise.resolve = action.payload;
        },
        updateCurrentPlayer: (state, action) => {
            state.currentPlayer = action.payload;
        },
        updateIsToPlay: (state, action) => {
            state.isToPlay = action.payload;
        },
        updateConnectedWithMnemonic: (state, action) => {
            state.connectedWithMnemonic = action.payload;
        }
    }

});

/**
 * here we destucture our state reducers
 */

export const {
    updateAccount,
    updateContractAddress,
    updatePlayerCard,
    updateOpponenCard,
    updateReach,
    updateReachBackend,
    updateWager,
    updatePromise,
    updateCurrentPlayer,
    updateIsToPlay,
    updateConnectedWithMnemonic,
} = gameStateSlice.actions;

export default gameStateSlice.reducer;