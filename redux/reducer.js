import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

const reducer = combineReducers({
    auth: authReducer
})

export default reducer