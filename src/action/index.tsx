import { Dispatch } from 'redux';
import axios from 'axios';
import { appTypes } from '../types/app';

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