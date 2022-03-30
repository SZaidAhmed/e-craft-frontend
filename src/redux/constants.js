import axios from "axios";

const accessToken = '';

export const authAxios = axios.create({
    baseURL: "https://e-craft.herokuapp.com/api/v1/",
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
});