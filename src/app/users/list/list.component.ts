import { Component, OnInit } from '@angular/core';
import { UserService } from '../../logic/services/user.service';
import { User } from '../../logic/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/interfaces/appstate.interface';
import { LoadAllUsers } from '../../store/actions/user.action';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit
{
  loadingFlag: boolean;
  userElement: User[] = [];

  constructor(private store: Store<AppState>) // userService => effect
  {}

  ngOnInit()
  {
    this.store.select('user').subscribe(state => {
      if(state)
        this.loadingFlag = state.loading;
        this.userElement = state.users;
    });//this.userService.getUsers().subscribe((resp: User[]) => this.userElement = resp);
    
    this.store.dispatch(new LoadAllUsers());
  }

}
