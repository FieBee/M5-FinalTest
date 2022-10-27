import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TourListComponent} from "./tour-list/tour-list.component";
import {TourCreateComponent} from "./tour-create/tour-create.component";
import {TourDeleteComponent} from "./tour-delete/tour-delete.component";
import {TourEditComponent} from "./tour-edit/tour-edit.component";

const routes: Routes = [
  {
    path: 'list',
    component: TourListComponent
  },
  {
    path: 'create',
    component: TourCreateComponent
  }, {
    path: 'edit/:id',
    component: TourEditComponent
  }, {
    path: 'delete/:id',
    component: TourDeleteComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
