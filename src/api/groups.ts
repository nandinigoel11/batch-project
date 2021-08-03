import { Groups } from "../models/Groups";
import axios from "axios";
import {BASE_URL} from "./base";
 
interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse{
    data: Groups[];
}

export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";
    axios.get<GroupResponse>(url, { params: data, })
        .then((response) => console.log(response.data.data))
        .catch((e) => console.error(e));
}