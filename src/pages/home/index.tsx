import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionToApiPost } from '../../action';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionToApiPost)
    }, [dispatch])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}