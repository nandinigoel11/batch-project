import { Groups } from "./models/Groups";
import { User } from "./models/User";
import {AnyAction, createStore, Reducer} from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const ME_FETCH = "me/fetch";

export interface AppState{
    me?: User;
    groups: Groups[];
    isSideBarOpen: boolean;
};

const initialState: AppState = {
    me: undefined,
    groups: [],
    isSideBarOpen: true,
};

const reducer: Reducer<AppState> = (currentState = initialState, dispatchedAction: AnyAction) => {
    switch(dispatchedAction.type){
        case ME_FETCH:
        case "me/login":
            return {...currentState, me: dispatchedAction.payload};
        default:
            return currentState;
    }
};

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchAction = (u: User) => ({type:ME_FETCH,payload:u});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;