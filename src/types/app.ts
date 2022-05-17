export interface AppState {
    isCreatePDF: boolean;
}

export enum AppActionTypes {
    SET_IS_CREATE_PDF = "SET_IS_CREATE_PDF",
}

interface SetIsCreatePDFAction {
    type: AppActionTypes.SET_IS_CREATE_PDF;
    payload: boolean;
}

export type AppAction = SetIsCreatePDFAction;

