import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, sortBySelector } from '../../state';
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
    const sortBy = useSelector(sortBySelector);
    const dispatch = useDispatch();
    const handleSetSortBy = v => dispatch(setSortBy(v));

    return (
        <Dropdown
            noValueLabel="Sort by"
            items={sortByList}
            setValue={handleSetSortBy}
            value={sortBy}
        />
    );
}