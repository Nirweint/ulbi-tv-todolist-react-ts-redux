import {AppState, AppAction, AppActionTypes} from "../../types/app";

const initialState: AppState = {
    isCreatePDF: false,
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.SET_IS_CREATE_PDF:
            return {...state, isCreatePDF: action.payload}
        default:
            return state
    }
}