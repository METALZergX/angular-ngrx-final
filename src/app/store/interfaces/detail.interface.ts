import { User } from "../../logic/models/user.model";

export interface DetailInterface
{
    user: User,
    completed: boolean,
    loading: boolean,
    error: any
}