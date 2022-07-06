import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/services/orderdetail.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private service: OrderdetailService) { }

  movieDetails:any;

  ngOnInit(): void {
    this.movieDetails = this.service.movieDetails;
  }

}
