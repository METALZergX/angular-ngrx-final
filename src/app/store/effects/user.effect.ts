import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from '@ngrx/effects';

import { User } from "../../logic/models/user.model";
import { UserService } from "../../logic/services/user.service";
import { LOAD_USER, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LoadAllUsersSucess, LoadAllUsersFail } from "../actions/user.action";

@Injectable()
export class UserEffect
{
    constructor(private actions$: Actions, private userService: UserService)
    {}

    @Effect()
    loadUsers$ = this.actions$.pipe(ofType(LOAD_USER), switchMap(action => {
        console.log('Effect.', action);
        return this.userService.getUsers().pipe(
            map(resp => new LoadAllUsersSucess(resp)), 
            catchError(errorThrow => of(new LoadAllUsersFail(errorThrow)))// of({ type: LOAD_USER_FAIL })
        );
    }));
}