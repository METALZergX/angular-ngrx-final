import { Action } from "../interfaces/appstate.interface";
import { User } from "../../logic/models/user.model";

export const { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAIL } = Object.freeze({ 
    LOAD_USER: '[USER] Get all users', SAVE_USER: '[USER] Save a user', LOAD_USER_SUCCESS: '[USER] Sucess load users', LOAD_USER_FAIL: '[USER] Fail load users' 
});

export class LoadAllUsers implements Action
{
    readonly type = LOAD_USER;
}

export class LoadAllUsersSucess implements Action
{
    readonly type = LOAD_USER_SUCCESS;

    constructor(public payload: User[])
    {}
}

export class LoadAllUsersFail implements Action
{
    readonly type = LOAD_USER_FAIL;

    constructor(public payload: any)
    {}
}

export type userActions = LoadAllUsers | LoadAllUsersSucess | LoadAllUsersFail;