import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from '../../users/list/list.component';
import { UserComponent } from '../../users/user/user.component';

const route: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule
{}
