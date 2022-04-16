import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from './slices';

export default configureStore({
    reducer: {
        appState: appStateReducer
    }
})