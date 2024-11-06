import { configureStore } from "@reduxjs/toolkit";
import { fsReducer } from "../Hooks/useStates/fs";

// console.log('fsReducer', fsReducer);

const store = configureStore({
    reducer: {
        fs: fsReducer
    }
});

export { store };
