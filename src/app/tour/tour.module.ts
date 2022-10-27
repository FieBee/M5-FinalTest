import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TourListComponent} from "./tour-list/tour-list.component";
import { TourEditComponent } from './tour-edit/tour-edit.component';
import { TourDeleteComponent } from './tour-delete/tour-delete.component';
import { TourCreateComponent } from './tour-create/tour-create.component';


@NgModule({
  declarations: [
    TourListComponent,
    TourEditComponent,
    TourDeleteComponent,
    TourCreateComponent,
  ],
  exports: [
    TourListComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TourModule { }
