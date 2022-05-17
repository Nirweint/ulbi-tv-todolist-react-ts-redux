import { AppAction, AppActionTypes } from "../../types/app"

export const setIsCreatePDFAC = (payload: boolean): AppAction => {
    return {type: AppActionTypes.SET_IS_CREATE_PDF, payload}
}