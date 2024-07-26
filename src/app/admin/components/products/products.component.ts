import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { HttpClientService } from '../../../services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Create_Product } from '../../../contracts/create_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner);
  }

  ngOnInit(): void {
    //this.showSpinner(SpinnerType.SquareJellyBox);
    
    this.httpClientService.get<Create_Product[]>({
      controller: "products"
    },41).subscribe(data => console.log(data));

   /* this.httpClientService.post({
      controller:"products"
    },{
        productName: "model.ProductName",
        feature1: "model.Feature1",
        feature2: "model.Feature2",
        productCode: "model.ProductCode",
        price: 2,
        quantity: 2,
        categoryId: "1"
    }).subscribe();
   /* this.httpClientService.put({
      controller: "products",
    },{
      id: 39,
      feature1: "oktay",
      feature2: "oktay",
      productCode: "oktay",
      productName:"oktay",
      quantity: 2,
      price:10
  }).subscribe()
  *//*
  this.httpClientService.delete({
    controller: "products",
  },40 ).subscribe();

 /* this.httpClientService.get({
    fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
  }).subscribe(data => console.log(data))*/
  }
}
