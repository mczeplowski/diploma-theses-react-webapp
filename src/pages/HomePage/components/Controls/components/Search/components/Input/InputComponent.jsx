import React from 'react';
import styles from './Input.module.scss';


export default function InputComponent() {
    return (
        <input
            className={styles.input}
            placeholder="Enter search phrase..."
            type="text"
        />
    );
}