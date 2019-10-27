import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

export default function DropdownComponent({ items, noValueLabel, setValue, value }) {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownLabel = value ? value.label : noValueLabel;
    const dropdownContentItems = items.filter(item => value ? item.id !== value.id : true);
    const handleItemClick = item => {
        setValue(item);
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
                    {dropdownContentItems
                        .map(item => (
                            <button
                                key={item.id}
                                onClick={() => handleItemClick(item)}
                            >
                                {item.label}
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
}