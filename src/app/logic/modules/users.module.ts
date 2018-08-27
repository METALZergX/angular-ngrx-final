import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../../users/user/user.component';
import { ListComponent } from '../../users/list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserComponent,
    ListComponent
  ],
  exports: [
    UserComponent,
    ListComponent
  ]
})
export class UsersModule
{}
