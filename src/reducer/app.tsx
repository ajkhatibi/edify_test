import { appTypes } from '../types/app';

export interface payload {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type Action = { type: appTypes.CALL_PUBLIC_API_POST, payload: payload[] } |
{ type: appTypes.TRIGGER_ADD_TO_FAVORITE_LIST, payload: payload } |
{ type: appTypes.CHECKING_AND_UNCHECKING_ITEMS, payload: number }


export interface State {
    data: payload[];
    favoriteList: any;
    checkedItems: {
        [key: string]: boolean
    }
}
const INITIAL_STATE: State = {
    data: [],
    favoriteList: [],
    checkedItems: {}
}

export default (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case appTypes.CALL_PUBLIC_API_POST:
            return { ...state, data: action.payload.slice(0, 10) };
        case appTypes.TRIGGER_ADD_TO_FAVORITE_LIST:
            return {
                ...state, favoriteList: [...state.favoriteList, action.payload]
            }
        case appTypes.CHECKING_AND_UNCHECKING_ITEMS:
            const key = state.checkedItems.hasOwnProperty(`item${action.payload}`);
            return {
                ...state, checkedItems: {
                    ...state.checkedItems,
                    [`item${action.payload}`]: key ? !state.checkedItems[`item${action.payload}`] : true
                }
            }
        default:
            return state;
    }
}