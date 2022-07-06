import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/services/orderdetail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: OrderdetailService) { }

  movieDetails:any;
  movieShowTimes:any;
  movieShowTimes2:any;
  movieShowTimes3:any;
  movieShowTimes4:any;
  movieShowTimes5:any;
  movieShowTimes6:any;
  movieShowTimes7:any;
  ngOnInit(): void {
    this.movieDetails = this.service.movieDetails;
    this.movieShowTimes = this.service.movieShowTimes;
    this.movieShowTimes2 = this.service.movieShowTimes2;
    this.movieShowTimes3 = this.service.movieShowTimes3;
    this.movieShowTimes4 = this.service.movieShowTimes4;
    this.movieShowTimes5 = this.service.movieShowTimes5;
    this.movieShowTimes6 = this.service.movieShowTimes6;
    this.movieShowTimes7 = this.service.movieShowTimes7;
  }

}
