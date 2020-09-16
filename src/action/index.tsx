import { Dispatch } from 'redux';
import axios from 'axios';
import { appTypes } from '../types/app';
import { payload } from '../reducer/app';

const apiInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const actionToApiPost = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await apiInstance.get('/posts');
        dispatch({ type: appTypes.CALL_PUBLIC_API_POST, payload: data });
    } catch (error) {
        throw new Error(error);
    }
}

export const addToFavoriteList = (item: payload) => async (dispatch: Dispatch) => {
    dispatch({ type: appTypes.TRIGGER_ADD_TO_FAVORITE_LIST, payload: item });
}

export const checkedAndUncheckedItems = (id: number) => async (dispatch: Dispatch) => {
    dispatch({ type: appTypes.CHECKING_AND_UNCHECKING_ITEMS, payload: id });
}