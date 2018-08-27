import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/interfaces/appstate.interface';
import { LoadDetailUser } from '../../store/actions/detail.action';
import { User } from '../../logic/models/user.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit
{
  selectedUser: User = null;

  constructor(private route: ActivatedRoute, private store: Store<AppState>)
  {}

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      if(params['id'])
        this.store.dispatch(new LoadDetailUser(params['id']));
    });

    this.store.select('detail').pipe(filter(stream => stream !== null)).subscribe(state => {
      console.log('detail.', state);
      if(state.user)
        this.selectedUser = state.user;
    });
  }

}
