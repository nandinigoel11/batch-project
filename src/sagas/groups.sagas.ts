import { takeEvery, call, put } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED } from "../actions/actions.constants";
import { queryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsAPI } from "../api/groups";

function* fetchGroups(action: AnyAction): Generator<any>  {
    const groups: any = yield call(fetchGroupsAPI, {query: action.payload, status: "all-groups"});

    yield put(queryCompletedAction(action.payload, groups));
};


export function* watchGroupQueryChanged() {
    yield takeEvery(GROUPS_QUERY_CHANGED, fetchGroups);
}