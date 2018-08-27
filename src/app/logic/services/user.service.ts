import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  readonly API_URL: string = 'https://reqres.in/api';

  constructor(private http: HttpClient)
  {}

  getUsers()
  {
    return this.http.get(`${this.API_URL}/users?per_page=10&delay=2`).pipe(map(resp => {
      if(resp)
        return resp['data'];
    }));
  }

  getUserById(id: string)
  {
    return this.http.get(`${this.API_URL}/users/${id}`).pipe(map(resp => {
      if(resp)
        return resp['data'];
    }));
  }
}
