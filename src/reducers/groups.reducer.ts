import { Reducer } from "redux";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED, GROUP_FETCH_ONE, GROUP_FETCH_ONE_COMPLETED } from "../actions/actions.constants";
import { Groups } from "../models/Groups";
import { addMany, addOne, EntityState, getIds, select } from "./entity.reducer";

export interface GroupState extends EntityState<Groups> {
    query: string;
    loading: boolean;
    queryMap: { [query: string]: number[] };
};

const initialState = {
    byId: {},
    query: "",
    loading: false,
    queryMap: {},
};

export const groupReducer: Reducer<GroupState> =
    (state = initialState, action) => {
        switch (action.type) {
            case GROUP_FETCH_ONE:
                return select(state, action.payload) as GroupState;
            case GROUPS_QUERY_CHANGED:
                const query = action.payload;

                return {
                    ...state,
                    query: query,
                    loading: true,
                };
            case GROUPS_QUERY_COMPLETED:
                const groups = action.payload.groups as Groups[];
                const groupIds = getIds(groups);

                const newState = addMany(state, groups) as GroupState;

                return {
                    ...newState,
                    queryMap: {
                        ...newState.queryMap,
                        [action.payload.query]: groupIds,
                    },
                   loading: false,
                };
            case GROUP_FETCH_ONE_COMPLETED:
                return addOne(state, action.payload) as GroupState;
            default:
                return state;

        }
    }