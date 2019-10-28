import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchBy, searchBySelector } from '../../../../state';
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
    const searchBy = useSelector(searchBySelector);
    const dispatch = useDispatch();
    const handleSetSearchBy = v => dispatch(setSearchBy(v));

    return (
        <Dropdown
            noValueLabel="Search by"
            items={searchByList}
            setValue={handleSetSearchBy}
            value={searchBy}
        />
    );
}