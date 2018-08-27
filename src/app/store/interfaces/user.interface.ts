import { User } from "../../logic/models/user.model";

export interface UserInterface
{
    users: User[],
    completed: boolean,
    loading: boolean,
    error: any
}