import { createSlice } from 'redux-starter-kit';

const name = 'pagination';
const paginationSlice = createSlice({
    name,
    initialState: {
        limit: 10,
        page: 1,
    },
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    }
});

export const {
    actions: { setLimit, setPage },
    reducer: paginationReducer,
} = paginationSlice;

export const limitSelector = state => state[name].limit;
export const pageSelector = state => state[name].page;