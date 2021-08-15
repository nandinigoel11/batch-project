import { Groups } from "../models/Groups";
import axios, { CancelToken } from "axios";
import {BASE_URL, get} from "./base";
 
export interface GroupRequest {
    limit?: number;
    offset?: number;
    query: string;
    status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse{
    data: Groups[];
}

export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";
    return get<GroupResponse>(url, { params: data});
};

export const fetchOneGroup = (id: string) => {
    const url = BASE_URL + "/groups/" + id;
    return axios.get<GroupResponse>(url);
};