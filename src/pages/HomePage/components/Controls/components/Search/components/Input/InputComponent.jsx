import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchPhrase, searchPhraseSelector } from '../../../../../../state';
import styles from './Input.module.scss';


export default function InputComponent() {
    const searchPhrase = useSelector(searchPhraseSelector);
    const dispatch = useDispatch();
    const handleInputChange = e => {
        dispatch(setSearchPhrase(e.target.value));
    };
    return (
        <input
            className={styles.input}
            placeholder="Enter search phrase..."
            type="text"
            value={searchPhrase}
            onChange={handleInputChange}
        />
    );
}