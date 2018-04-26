import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterTextPipe } from './filter-text.pipe';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {myRoutes} from "./app.routing";
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterTextPipe,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    myRoutes,
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
