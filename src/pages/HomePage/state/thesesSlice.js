import { createSlice } from 'redux-starter-kit';

const name = 'theses';
const thesesSlice = createSlice({
    name,
    initialState: {
        isLoading: false,
        list: [],
        pagination: {},
    },
    reducers: {
        fetchThesesRequested: (state) => {
            state.isLoading = true;
        },
        fetchThesesSuccess: (state, action) => {
            state.isLoading = false;
            state.list = action.payload.theses;
            state.pagination = action.payload.pagination;
        },
        fetchThesesFail: (state, action) => {
            state.isLoading = false;
        },
    }
});

export const {
    actions: { fetchThesesRequested, fetchThesesSuccess, fetchThesesFail },
    reducer: thesesReducer,
} = thesesSlice;

export const isLoadingSelector = state => state[name].isLoading;
export const listSelector = state => state[name].list;
export const paginationSelector = state => state[name].pagination;
export const paginationPagesSelector = state => state[name].pagination.pages;

const getUrl = (queryStringsObject) => {
    let url = 'http://localhost:3001/theses?';

    Object.keys(queryStringsObject).forEach(key => {
        const queryString = queryStringsObject[key];
        if (!queryString) {
            return;
        }

        url += `${key}=${queryString}&`;
    });

    return url.slice(0, url.length - 1);
}

export const fetchTheses = () => (dispatch, getState) => {
    dispatch(fetchThesesRequested());
    const { controls, pagination } = getState();
    const { page, limit } = pagination;

    const queryStrings = {
        ...controls,
        limit,
        page: page - 1,
    }

    const url = getUrl(queryStrings);

    fetch(url)
        .then(res => res.json())
        .then(data => dispatch(fetchThesesSuccess(data)))
        .catch(() => dispatch(fetchThesesFail()));
};