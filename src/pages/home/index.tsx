import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionToApiPost } from '../../action';
import { STORE } from '../../reducer';
import { useHistory } from "react-router-dom";
import { payload } from '../../reducer/app';
export default function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state: STORE) => state.app);

    useEffect(() => {
        dispatch(actionToApiPost())
    }, [dispatch])
    const navigateToDetailPage = (item: payload) => {
        console.log("pressed button: ");
        history.push(`/favorite/${item.title}/${item.body}`);
    }
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {state.data.map((item, index) => (
                    <li onClick={() => navigateToDetailPage(item)} key={index}>
                        <h3>{item.title}</h3>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}