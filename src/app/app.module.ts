import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {TourComponent} from "./product/tour-list/tour.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TourCreateComponent } from './product/tour-create/tour-create.component';
import { TourEditComponent } from './product/tour-edit/tour-edit.component';
import { TourDetailComponent } from './product/tour-detail/tour-detail.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    TourCreateComponent,
    TourEditComponent,
    TourDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
