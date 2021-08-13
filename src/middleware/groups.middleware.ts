import { groupsActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";
import { groupLoadingQUerySelector, groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
    const queryLoading = groupLoadingQUerySelector(store.getState());

    const query = request.query;

    const loading = queryLoading[query];

    groupsActions.query(query);

    if (loading){
        return;
    }

    fetchGroupsAPI(request).then((groups) => {
        groupsActions.queryCompleted(query, groups);
    });
};