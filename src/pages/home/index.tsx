import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionToApiPost } from '../../action';
import { STORE } from '../../reducer';

export default function Home() {
    const dispatch = useDispatch();
    const state = useSelector((state: STORE) => state.app);

    useEffect(() => {
        dispatch(actionToApiPost())
    }, [dispatch])
    const navigateToDetailPage = () => {

    }
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {state.data.map((item, index) => (
                    <li key={index}>
                        <h3 onClick={}>{item.title}</h3>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}