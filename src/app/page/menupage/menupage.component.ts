import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailService } from 'src/app/services/orderdetail.service';




@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service:OrderdetailService) { }
  getMenuId: any;
  menuData: any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    // console.log(this.getMenuId, 'getMenuId');
    if(this.getMenuId) {
      this.menuData = this.service.movieDetails.filter((val) => {
        return val.id == this.getMenuId;
      });
      console.log(this.menuData, 'getMenuData');

    }
  }

}
