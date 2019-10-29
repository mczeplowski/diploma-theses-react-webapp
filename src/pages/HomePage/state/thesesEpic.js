import { ofType } from 'redux-observable';
import { debounceTime, map } from 'rxjs/operators';
import { setSearchBy, setSearchPhrase, setSortBy } from './controlsSlice'
import { fetchTheses } from './thesesSlice';

const actionTypes = [
    setSearchBy.type,
    setSearchPhrase.type,
    setSortBy.type,
];

export const thesesEpic = $action => $action.pipe(
    ofType(...actionTypes),
    debounceTime(500),
    map(fetchTheses)
);