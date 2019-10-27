import React, { useState } from 'react';
import Dropdown from '../../../../../../../../common/components/Dropdown';

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

export default function SearchByDropdownComponent() {
    const [searchBy, setSearchBy] = useState(null);

    return (
        <Dropdown
            noValueLabel="Search by"
            items={searchByList}
            setValue={setSearchBy}
            value={searchBy}
        />
    );
}