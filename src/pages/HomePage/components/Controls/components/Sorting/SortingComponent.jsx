import React, { useState } from 'react';
import Dropdown from '../../../../../../common/components/Dropdown';

const sortByList = [
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

export default function SortingDropdownComponent() {
    const [sortBy, setSortBy] = useState(null);

    return (
        <Dropdown
            noValueLabel="Sort by"
            items={sortByList}
            setValue={setSortBy}
            value={sortBy}
        />
    );
}