import { Component, OnInit } from '@angular/core';
import {Tour} from "../../model/tour";
import {TourService} from "../../service/tour.service";
import {ActivatedRoute, ParamMap} from "@angular/router";


@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {

  tour: Tour = {
    id:0,
    title:"",
    description: "",
    price: 0
  };
  id: number | undefined;
  constructor(private tourService: TourService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getTour(this.id);
    })
  }

  ngOnInit(): void {
  }

  getTour(id: number){
    this.tourService.getTour(id).
    subscribe(product =>{
      this.tour = product;
    });
  }



}
