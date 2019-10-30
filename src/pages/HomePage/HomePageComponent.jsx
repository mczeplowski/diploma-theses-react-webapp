import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Controls from './components/Controls';
import Table from './components/Table';
import Pagination from './components/Pagination';
import { fetchTheses } from './state/thesesSlice';

export default function HomePageComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTheses());
    }, [dispatch]);

    return (
        <>
            <Controls />
            <Table />
            <Pagination />
        </>
    )
}