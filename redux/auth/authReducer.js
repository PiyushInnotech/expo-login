import {
    LOGIN_USER,
    GET_USER
} from "../constants";
const initialState = {
    user: {},
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state;
    }
}

export default authReducer