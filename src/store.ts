import {  combineReducers, createStore } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { groupReducer} from "./reducers/groups.reducer";
import { userReducer} from "./reducers/users.reducer";
import { authReducer } from "./reducers/auth.reducer";

const reducer = combineReducers({
    users: userReducer,
    groups: groupReducer,
    auth: authReducer,
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;