import { Groups } from "../models/Groups";
import axios, { CancelToken } from "axios";
import {BASE_URL} from "./base";
 
export interface GroupRequest {
    limit?: number;
    offset?: number;
    query: string;
    status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse{
    data: Groups[];
}

export const fetchGroups = (data: GroupRequest, token?: CancelToken) => {
    const url = BASE_URL + "/groups";
    return axios.get<GroupResponse>(url, { params: data, cancelToken: token})
        .then((response) => response.data.data);
}