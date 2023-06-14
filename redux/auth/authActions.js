import {
    LOGIN_USER,
    GET_USER
} from "../constants";

export const handleUserLogin = (loginDetails) => {
    return {
        type: LOGIN_USER,
        payload: loginDetails
    }
}

export const getUserDetails = (data) => {
    return {
        type: GET_USER,
        payload: data
    }
}