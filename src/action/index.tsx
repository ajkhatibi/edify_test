import { Dispatch } from 'redux';
// import axios from 'axios';
import { appTypes } from '../types/app';
// import app from '../reducer/app';

// const apiInstance = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// });

export const actionToApiPost = () => async (dispatch: Dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            dispatch({ type: appTypes.CALL_PUBLIC_API_POST });

        })
        .catch(error => console.log(error))
}