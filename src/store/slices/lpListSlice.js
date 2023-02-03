import { createSlice, nanoid } from '@reduxjs/toolkit';

const lpListSlice = createSlice({
    // assuming action.payload === { name: 'xy', cost: 100 }
    name: 'lpList',
    initialState: {
        searchTerm: '',
        items: []
    },
    reducers: {
        changeSearchTerm(state,action) {
            state.searchTerm = action.payload;
        },
        addLp(state,action) {
            state.items.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeLp(state,action) {
        // assuming action.payload === id of lp I want to remove
            const updated = state.items.filter((lp) => {
                return lp.id !== action.payload
            });
            state.items = updated;
        },
    },
});

export const { changeSearchTerm, addLp, removeLp } = lpListSlice.actions
export const listReducer = lpListSlice.reducer;