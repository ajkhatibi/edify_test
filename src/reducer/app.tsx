import { appTypes } from '../types/app';

export interface payload {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Action = { type: appTypes.CALL_PUBLIC_API_POST, payload: payload[] }

export interface State {
    data: payload[];
}
const INITIAL_STATE: State = {
    data: []
}

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case appTypes.CALL_PUBLIC_API_POST:
            console.log("data: ", action.payload.slice(0, 10));
            return { ...state, data: action.payload.slice(0, 10) };
        default:
            return state;
    }
}