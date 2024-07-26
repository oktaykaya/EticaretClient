import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService, private ProductService: ProductService, private alertify: AlertifyService){
    super(spinner)
  }

  ngOnInit(): void {
    
  }
  create(Name:HTMLInputElement, Code:HTMLInputElement, Price:HTMLInputElement, Quantity:HTMLInputElement, Feature1:HTMLInputElement, Feature2:HTMLInputElement, CategoryId: HTMLInputElement){
    this.showSpinner(SpinnerType.SquareJellyBox)
    const create_product: Create_Product = new Create_Product();
    create_product.productName = Name.value;
    create_product.productCode = Code.value;
    create_product.price = parseFloat(Price.value);
    create_product.quantity = parseInt(Quantity.value);
    create_product.feature1 = Feature1.value;
    create_product.feature2 = Feature2.value;
    create_product.categoryId = parseInt(CategoryId.value)

    this.ProductService.create(create_product, () => {
      this.hideSpinner(SpinnerType.SquareJellyBox);
      this.alertify.message("Ürün başarı ile eklenmiştir", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
    });
  }
}
