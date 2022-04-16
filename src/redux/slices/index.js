import {createSlice} from '@reduxjs/toolkit'


export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState:{
        account: {},
        contractAddress: '',
        playerCard: 0,
        opponentCard: 0,
        reach: '{}',
        reachBackend: '{}'

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
    updateReachBackend
} = gameStateSlice.actions;

export default gameStateSlice.reducer;