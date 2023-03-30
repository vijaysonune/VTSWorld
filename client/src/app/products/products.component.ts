import { Component , EventEmitter , Output} from '@angular/core';
import { ProductInterface } from '../Product.Interface';
import { Router } from '@angular/router';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  
  constructor(private router: Router , private productService : ProductServiceService){ }
 

  products : ProductInterface[] =  this.productService.getProducts();

  sendProduct(id : number)
  {
     console.log("this method is called")
     console.log(id)
      this.router.navigate(['/productdetails/'+id ]);
    }
  }
 


