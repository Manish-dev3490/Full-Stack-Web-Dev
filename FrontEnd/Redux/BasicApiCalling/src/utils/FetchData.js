import React, { useEffect } from 'react';
import url from './Mockdata';
import { useDispatch } from 'react-redux';
import { errorHandler, loadingData, updateData } from './Slice';

function FetchDataComponent() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(loadingData(true));
                const response = await fetch(url);
                const data = await response.json();
                dispatch(updateData(data));
            } catch (error) {
                dispatch(errorHandler(error.message));
            }
        };

        fetchData();
    }, [dispatch]);

    return null; // or your JSX
}

export default FetchDataComponent;
