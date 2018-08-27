import { LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAIL } from "../actions/detail.action";
import { Action } from "../interfaces/appstate.interface";
import { DetailInterface } from "../interfaces/detail.interface";

const initStateDetail: DetailInterface = { user: null, completed: false, loading: false, error: null };

export function DetailReducer(state: DetailInterface = initStateDetail, action: Action): DetailInterface
{
    switch(action.type)
    {
        case LOAD_DETAIL:
            return { ...state, loading: true, error: null, user: null };
        case LOAD_DETAIL_SUCCESS:
            return { ...state, loading: false, completed: true, user: { ...action.payload } };
        case LOAD_DETAIL_FAIL:
            return { ...state, loading: false, completed: false, error: action.payload };
        default:
            return state;
    }
}