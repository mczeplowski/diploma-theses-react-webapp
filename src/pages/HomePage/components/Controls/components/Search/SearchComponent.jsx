import React from 'react';
import styles from './Search.module.scss';
import SearchByDropdown from './components/SearchByDropdown'
import Input from './components/Input';

export default function SearchComponent() {
    return (
        <div className={styles.container}>
            <SearchByDropdown />
            <Input />
        </div>
    );
}