import { Groups } from "../models/Groups";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED, GROUP_FETCH_ONE, GROUP_FETCH_ONE_COMPLETED } from "./actions.constants";

export const queryChangedAction = (query: string) => ({
    type: GROUPS_QUERY_CHANGED,
    payload: query,
});

export const queryCompletedAction = (query: string, groups: Groups[]) => ({
    type: GROUPS_QUERY_COMPLETED,
    payload: { query, groups },
});

export const fetchOneGroup = (id: number) => ({
    type: GROUP_FETCH_ONE,
    payload: id,
});

export const fetchOneGroupComplete = (group: Groups) => ({
    type: GROUP_FETCH_ONE_COMPLETED,
    payload: group,
});

