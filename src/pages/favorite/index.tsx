import React from 'react';
import { useSelector } from 'react-redux';
import { STORE } from '../../reducer';
import { payload } from '../../reducer/app';

export default function Favorite() {
    const state = useSelector((state: STORE) => state.app);
    return (
        <div>
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