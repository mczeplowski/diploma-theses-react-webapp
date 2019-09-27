import React from 'react';
import styles from './Search.module.scss';
import Dropdown from './components/Dropdown'

export default function SearchComponent() {
    return (
        <div className={styles.container}>
            <Dropdown />
            <input
                className={styles.input}
                placeholder="Enter search phrase..."
                type="text"
            />
        </div>
    );
}