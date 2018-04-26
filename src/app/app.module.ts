import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterTextPipe } from './filter-text.pipe';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FilterTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
