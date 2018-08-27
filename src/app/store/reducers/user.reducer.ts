import { LOAD_USER, LOAD_USER_FAIL, LOAD_USER_SUCCESS } from "../actions/user.action";
import { UserInterface } from "../interfaces/user.interface";
import { Action } from "../interfaces/appstate.interface";

const initStateUser: UserInterface = { users: [], completed: false, loading: false, error: null };

export function UserReducer(state: UserInterface = initStateUser, action: Action): UserInterface
{
    switch(action.type)
    {
        case LOAD_USER:
            return { ...state, loading: true, error: null, users: [] };
        case LOAD_USER_SUCCESS:
            return { ...state, loading: false, completed: true, users: [ ...action.payload ] };
        case LOAD_USER_FAIL:
            return { ...state, loading: false, completed: false, error: action.payload };
        default:
            return state;
    }
}