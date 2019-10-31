import { configureStore, combineReducers, getDefaultMiddleware } from 'redux-starter-kit';
import { createEpicMiddleware } from 'redux-observable';
import { controlsReducer, thesesEpic, thesesReducer, paginationReducer } from './pages/HomePage';

export const useStore = function() {
    const reducer = combineReducers({
        controls: controlsReducer,
        theses: thesesReducer,
        pagination: paginationReducer,
    });

    const epicMiddleware = createEpicMiddleware();

    const store = configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), epicMiddleware]
    });

    epicMiddleware.run(thesesEpic);

    return store;
}

