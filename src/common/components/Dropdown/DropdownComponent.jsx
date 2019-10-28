import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

export default function DropdownComponent({ items, noValueLabel, setValue, value }) {
    const [isOpen, setIsOpen] = useState(false);

    const getLabel = v => items.find(item => item.id === v);
    const dropdownLabel = value ? getLabel(value).label : noValueLabel;
    const handleItemClick = value => {
        setValue(value);
        setIsOpen(false);
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.label}
                onClick={() => setIsOpen(!isOpen)}
            >
                {dropdownLabel}
                <i />
            </button>
            {isOpen && (
                <div className={styles.content}>
                    {items
                        .map(item => (
                            <button
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                            >
                                {item.label}
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
}