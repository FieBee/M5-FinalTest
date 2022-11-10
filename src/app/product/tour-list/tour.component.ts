import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import swal from "sweetalert";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tours: Tour[]=[]

  constructor(private tourService: TourService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(): Tour[]{
    this.tourService.getAllTour().subscribe(
      tours=>{
        this.tours= tours;
      }
    )
    return this.tours;
  }
  delete(id: any){
    swal({
      title: "Bạn chắc muốn xóa?",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Đã xóa", {
            icon: "success",
          });
          this.tourService.deleteTour(id).subscribe(
            next =>{this.tours = this.getAll();
            },
            error => {
              alert("error")
            }
          );
        } else {
          swal("Lỗi");
        }
      });
  }

}
