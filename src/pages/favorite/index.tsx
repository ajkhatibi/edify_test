import React from 'react';
import { useSelector } from 'react-redux';
import { STORE } from '../../reducer';
import { payload } from '../../reducer/app';
import { useHistory } from 'react-router-dom';

export default function Favorite() {
    const state = useSelector((state: STORE) => state.app);
    const history = useHistory();
    return (
        <div>
            <button id="details_go_back_button" onClick={() => history.push("/")}>go back</button>

            <h1>favroite</h1>
            <ul>
                {state.favoriteList.map((item: payload, index: number) => {
                    return (
                        <li key={index}>
                            <h3>{item.title}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}