import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

const searchByList = [
    { id: 'name', label: 'Name' },
    { id: 'surname', label: 'Surname' },
    { id: 'topic', label: 'Topic' },
    { id: 'promoter', label: 'Promoter' },
    { id: 'reviewer', label: 'Reviewer' },
    { id: 'studies', label: 'Studies' },
    { id: 'field', label: 'Filed' },
    { id: 'specialty', label: 'Specialty' },
    { id: 'defenseDate', label: 'Defense Date' },
];

export default function DropdownComponent() {
    const [searchBy, setSearchBy] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownLabel = searchBy ? searchBy.label : 'Search by..';
    const dropdownContentItems = searchByList.filter(r => searchBy ? r.id !== searchBy.id : true);

    return (
        <div className={styles.container}>
            <button
                className={styles.label}
                onClick={() => setIsOpen(!isOpen)}
            >
                {dropdownLabel}
            </button>
            {isOpen && (
                <div className={styles.content}>
                    {dropdownContentItems
                        .map(item => (
                            <button
                                key={item.id}
                                onClick={() => setSearchBy(item)}
                            >
                                {item.label}
                            </button>
                        ))}
                </div>
            )}
        </div>
    );
}