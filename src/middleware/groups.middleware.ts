import axios, { Canceler } from "axios";
import { groupsActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsAPI } from "../api/groups";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
    const query = request.query;
    groupsActions.query(query);

    canceler && canceler();

    const { cancel, token } = axios.CancelToken.source();

    canceler = cancel;

    fetchGroupsAPI(request, token).then((groups) => {
        groupsActions.queryCompleted(query, groups);
        canceler = undefined;
    });
};