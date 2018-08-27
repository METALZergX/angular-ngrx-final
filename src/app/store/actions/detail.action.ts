import { Action } from "../interfaces/appstate.interface";
import { User } from "../../logic/models/user.model";

export const { LOAD_DETAIL, LOAD_DETAIL_FAIL, LOAD_DETAIL_SUCCESS } = Object.freeze({ 
    LOAD_DETAIL: '[DETAIL] Get detail user', LOAD_DETAIL_SUCCESS: '[DETAIL] Sucess load', LOAD_DETAIL_FAIL: '[DETAIL] Fail load' 
});

export class LoadDetailUser implements Action
{
    readonly type = LOAD_DETAIL;

    constructor(public payload: string)
    {}
}

export class LoadDetailSucess implements Action
{
    readonly type = LOAD_DETAIL_SUCCESS;

    constructor(public payload: User)
    {}
}

export class LoadDetailFail implements Action
{
    readonly type = LOAD_DETAIL_FAIL;

    constructor(public payload: any)
    {}
}

export type detailActions = LoadDetailUser | LoadDetailSucess | LoadDetailFail;