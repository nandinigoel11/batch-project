import { createSelector } from "reselect";
import { AppState } from "../store";
import { groupStateSelector } from "./app.selectors";


export const groupQuerySelector = createSelector([groupStateSelector], (groupState) => groupState.query);

export const groupQueryMapSelector = createSelector([groupStateSelector], (groupState) => groupState.queryMap);

const groupIdSelector = createSelector([groupStateSelector], (groupState) => groupState.byId);

const groupLoadingQUerySelector = createSelector([groupStateSelector], (groupState) => groupState.loadingQuery);

export const groupLoadingSelector = createSelector([groupQuerySelector, groupLoadingQUerySelector], (query, loadingMap) => loadingMap[query]);




export const groupsCurrentQuerySelector = createSelector([groupQuerySelector, groupQueryMapSelector, groupIdSelector], (query, queryMap, byId) => {
  const groupIds = queryMap[query] || [];
  const groups = groupIds.map((id) => byId[id]);
  return groups;
})