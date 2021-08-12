import { bindActionCreators } from "redux";
import { Groups } from "../models/Groups";
import { store } from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED } from "./actions.constants";

 const queryAction = (query: string, loading: boolean) => ({
    type: GROUPS_QUERY,
    payload: {query, loading},
});

const queryCompletedAction = (query: string, groups: Groups[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query, groups },
});

export const groupsActions = bindActionCreators({
    query: queryAction,
    queryCompleted: queryCompletedAction,
}, store.dispatch)