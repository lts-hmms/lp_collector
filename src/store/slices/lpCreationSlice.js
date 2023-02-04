import { createSlice } from '@reduxjs/toolkit';
import { addLp } from './lpListSlice';

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
        },
    },
    extraReducers(builder) {
        builder.addCase(addLp, (state, action) => {
            state.name = '';
            state.cost = 0
        });
    },
});

export const { changeName, changeCost } = lpCreationSlice.actions;
export const creationReducer = lpCreationSlice.reducer;