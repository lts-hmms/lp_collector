import { createSlice } from '@reduxjs/toolkit';

const lpCreationSlice = createSlice({
    name: 'lpCreation',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state,action) {
            state.name = action.payload;
        },
        changeCost(state,action) {
            state.cost = action.payload;
        }
    }
});

export const { changeName, changeCost } = lpCreationSlice.actions;
export const creationReducer = lpCreationSlice.reducer;