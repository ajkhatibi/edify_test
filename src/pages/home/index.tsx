import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionToApiPost, addToFavoriteList, checkedAndUncheckedItems } from '../../action';
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
        history.push(`/detail/${item.title}/${item.body}`);
    }
    const navigateToFavoritePage = () => {
        history.push("/favorite");
    }
    const clickedOnRadioButton = (value: payload) => {
        dispatch(checkedAndUncheckedItems(value.id));
        dispatch(addToFavoriteList(value));
    }

    console.log(state);
    return (
        <div>
            <div>
                <h1>Home</h1>
                <div>
                    <button onClick={navigateToFavoritePage}>Go To Favroite Page</button>
                </div>
            </div>
            <div>
                <ul>
                    {state.data.map((item, index) => (
                        <div onClick={() => clickedOnRadioButton(item)} key={index}>
                            <label>
                                <input
                                    type="radio"
                                    value={`item${item.id}`}
                                    checked={state.checkedItems[`item${item.id}`] === undefined ? false : state.checkedItems[`item${item.id}`]}
                                />
                                {item.title}

                            </label>
                        </div>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}