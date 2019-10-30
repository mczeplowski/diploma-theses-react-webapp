import { ofType } from 'redux-observable';
import { debounceTime, map } from 'rxjs/operators';
import { setSearchBy, setSearchPhrase, setSortBy } from './controlsSlice'
import { setLimit, setPage } from './paginationSlice';
import { fetchTheses } from './thesesSlice';

const actionTypes = [
    setSearchBy.type,
    setSearchPhrase.type,
    setSortBy.type,
    setLimit.type,
    setPage.type,
];

export const thesesEpic = $action => $action.pipe(
    ofType(...actionTypes),
    debounceTime(500),
    map(fetchTheses)
);