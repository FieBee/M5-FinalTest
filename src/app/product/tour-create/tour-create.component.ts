import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {Router} from "@angular/router";
import swal from "sweetalert";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {

  tour: Tour = {
    id:0,
    title:"",
    description: "",
    price: 0
  };

  constructor(private tourService: TourService,
              private router: Router) {

  }

  ngOnInit(): void {
  }
  createTour() {
    swal("Thêm thành công", "success")
    this.tourService.createTour(this.tour)
      .subscribe(() => {
        this.router.navigate(['/'])
      });
  }
}
