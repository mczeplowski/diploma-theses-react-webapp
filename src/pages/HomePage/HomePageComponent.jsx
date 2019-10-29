import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Controls from './components/Controls';
import { fetchTheses } from './state/thesesSlice';

export default function HomePageComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTheses());
    }, [dispatch]);

    return (
        <>
            <Controls />
        </>
    )
}