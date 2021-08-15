import { createSelector } from "reselect";
import { AppState } from "../store";
import { groupStateSelector } from "./app.selectors";


export const groupQuerySelector = createSelector([groupStateSelector], (groupState) => groupState.query);

export const groupQueryMapSelector = createSelector([groupStateSelector], (groupState) => groupState.queryMap);

export const groupIdSelector = createSelector([groupStateSelector], (groupState) => groupState.byId);

export const groupsLoadingSelector = createSelector([groupStateSelector], (groupState) => groupState.loading);

export const selectedIdSelector = createSelector([groupStateSelector], (groupState) => groupState.selectedId);

export const selectedGroupSelector = createSelector([groupIdSelector, selectedIdSelector], (byId, id) => id && byId[id]);



export const groupsCurrentQuerySelector = createSelector([groupQuerySelector, groupQueryMapSelector, groupIdSelector], (query, queryMap, byId) => {
  const groupIds = queryMap[query] || [];
  const groups = groupIds.map((id) => byId[id]);
  return groups;
})