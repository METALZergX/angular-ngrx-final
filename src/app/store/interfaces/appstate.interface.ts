import { ActionReducerMap } from "@ngrx/store";

import { UserInterface } from "./user.interface";
import { UserReducer } from "../reducers/user.reducer";
import { DetailInterface } from "./detail.interface";
import { DetailReducer } from "../reducers/detail.reducer";

export interface Action
{
    type: string, // Action required
    payload?: any // Data for request
}

export interface AppState
{
    user: UserInterface, // ui.reducer
    detail: DetailInterface // detail.reducer
}

// Definicion de Reducers para el StoreModule
export const ReducerInterface: ActionReducerMap<AppState> = {
    user: UserReducer,
    detail: DetailReducer
};