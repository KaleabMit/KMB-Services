import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productdata: product | undefined;
  showadd: boolean = true;
  showremove: boolean = false;

  constructor(private api: ApiService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    const productid = this.activatedroute.snapshot.paramMap.get('productid');
    if (productid) {
      const id = Number(productid);
      this.productdata = this.api.getproductbyid(id);
      console.log(this.productdata);
    }
  }

  addtocart(productdata: product) {
    if (productdata) {
      this.showadd = false;
      this.showremove = true;
      this.api.addtocart(productdata);
    }
  }

  removeitem(productdata: product) {
    if (productdata) {
      this.showadd = true;
      this.showremove = false;
      this.api.removecartitem(productdata);
    }
  }
}
