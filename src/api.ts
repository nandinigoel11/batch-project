import axios from "axios";
import { promises } from "dns";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_LOGIN_TOKEN);

    if (!token){
        return config;
    }

    return {...config, headers: {...config.headers, Authorization: token }};
});

axios.interceptors.response.use(undefined, (error) => {
    if (error.response.data.code === 9101){
        localStorage.removeItem(LS_LOGIN_TOKEN);
        window.location.href = "/login";
    }
    return Promise.reject(error);
});

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

interface User {
    id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "staff" | "admin";
}

export const LS_LOGIN_TOKEN = "login_token";

const BASE_URL = "https://api-dev.domecompass.com";

export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);

    return axios.post<LoginResponse>(url, data).then((response) => {
        console.log(response.data.token);
        localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
        return response.data.user;
    }
    );
};

export const logout = () => {
    localStorage.removeItem(LS_LOGIN_TOKEN);
}

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups" | "favourite" | "archieved";
}

export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups";
    axios.get(url, { params: data, })
        .then((response) => console.log(response))
        .catch((e) => console.error(e));
}