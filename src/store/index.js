import { configureStore } from "@reduxjs/toolkit";
import { listReducer, addLp, removeLp, changeSearchTerm } from "./slices/lpListSlice";
import { creationReducer, changeName, changeCost } from "./slices/lpCreationSlice";

const store = configureStore({
    reducer: {
        lps: listReducer,
        creation: creationReducer
    }
});

export {
    store, changeName, changeCost, addLp, removeLp, changeSearchTerm
};


