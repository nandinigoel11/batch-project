import {User} from "../models/User";
import axios from "axios";
import { LS_AUTH_TOKEN } from "./base";
import {BASE_URL} from "./base";

interface LoginRequest {
    email: string;
    password: string
}

interface LoginResponse {
    data: {
        is_2fa_enables: boolean;
    };
    token: string;
    user: User;
}

export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);

    return axios.post<LoginResponse>(url, data).then((response) => {
        console.log(response.data.token);
        localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
        return response.data.user;
    }
    );
};

export const logout = () => {
    localStorage.removeItem(LS_AUTH_TOKEN);
}