import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './logic/modules/shared.module';
import { UsersModule } from './logic/modules/users.module';
import { AppRoutingModule } from './logic/modules/app-routing.module';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientModule } from "@angular/common/http";
import { ReducerInterface } from './store/interfaces/appstate.interface';
import { environment } from '../environments/environment';
import { effectList } from './store/effects/manage.effect';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ReducerInterface),
    EffectsModule.forRoot(effectList),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SharedModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
