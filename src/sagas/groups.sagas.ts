import { takeLatest, call, put, delay, takeEvery, all } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import { GROUPS_QUERY_CHANGED, GROUP_FETCH_ONE } from "../actions/actions.constants";
import { fetchOneGroupComplete, queryCompletedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsAPI, fetchOneGroup as fetchOneGroupAPI } from "../api/groups";

function* fetchGroups(action: AnyAction): Generator<any> {
    // yield delay(300);
    const groupsRes: any = yield call(fetchGroupsAPI, { query: action.payload, status: "all-groups" });

    yield put(queryCompletedAction(action.payload, groupsRes.data.data));
};

function* fetchOne(action: AnyAction): Generator<any> {
    const res: any = yield call(fetchOneGroupAPI, action.payload);

    yield put(fetchOneGroupComplete(res.data.data));
}

export function* watchGroupQueryChanged() {
    yield all([
        takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
            takeEvery(GROUP_FETCH_ONE, fetchOne),
    ]);
}

