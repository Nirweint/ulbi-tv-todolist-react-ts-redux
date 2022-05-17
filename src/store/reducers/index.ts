import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    todo: todoReducer,
    app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>