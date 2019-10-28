import { createSlice } from 'redux-starter-kit';

const name = 'controls';
const controlsSlice = createSlice({
    name,
    initialState: {
        searchBy: undefined,
        searchPhrase: '',
        sortBy: undefined,
        sortType: 1
    },
    reducers: {
        setSearchBy: (state, action) => {
            state.searchBy = action.payload;
        },
        setSearchPhrase: (state, action) => {
            state.searchPhrase = action.payload;
        },
        setSortBy: (state, action) => {
            if (state.sortBy === action.payload) {
                state.sortType *= -1;
            }
            state.sortBy = action.payload;
        },
    }
});

export const { actions: { setSearchBy, setSearchPhrase, setSortBy }, reducer } = controlsSlice;

export const searchBySelector = state => state[name].searchBy;
export const searchPhraseSelector = state => state[name].searchPhrase;
export const sortBySelector = state => state[name].sortBy;