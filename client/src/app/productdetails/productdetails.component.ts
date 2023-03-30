import { Component, Input, OnInit} from '@angular/core';
import { ProductInterface } from '../Product.Interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit  {

 //public id;
  constructor(private router: Router ,private productService : ProductServiceService , private _route:ActivatedRoute ) {
      //this.id = this.router.getCurrentNavigation ;
    
    // Use selectionId now
   
  }
  

  public product : any;
  public productId : number =0 ;
 

  ngOnInit()
  {
    console.log("ngOnInit called");   
    console.log();
  
      this._route.params.subscribe(params => {
        this.productId=  this._route.snapshot.params['id'];               
      });      
      if (this.productId === undefined) {
        this.productId = 1;
      }       
       
      this.product =  this.productService.getProductsById(this.productId);
  }


 
}
