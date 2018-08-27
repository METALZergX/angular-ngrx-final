import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import { Action } from '../interfaces/appstate.interface';
//import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from '@ngrx/effects';

import { User } from "../../logic/models/user.model";
import { UserService } from "../../logic/services/user.service";
import { LOAD_DETAIL, LoadDetailFail, LoadDetailSucess } from "../actions/detail.action";

@Injectable()
export class DetailEffect
{
    constructor(private actions$: Actions, private userService: UserService)
    {}

    @Effect()
    loadDetail$ = this.actions$.pipe(ofType(LOAD_DETAIL), switchMap((action: Action) => {
        console.log('Effect.', action);
        return this.userService.getUserById(action.payload).pipe(
            map((resp: User) => new LoadDetailSucess(resp)), 
            catchError(errorThrow => of(new LoadDetailFail(errorThrow)))
        );
    }));
}