import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productmodal';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public cartitems:number=0;
  showproduct: any = [];
  constructor(private api:ApiService,private router: Router){}
  ngOnInit(): void {
  this.api.products().subscribe(res=>{
    this.cartitems = res.length;
    this.showproduct = res;
  })
  }

  emptycart(){
    this.api.removeallitems();
  }
  deleteitem(item: product) {
    this.api.removecartitem(item)
  }
  navigateToAboutUs() {
    this.router.navigate(['/about-us']);
}
navigateToBlog(){
  this.router.navigate(['/blog']);
}
navigateToCategory(){
  this.router.navigate(['/category']);
}
navigateToService(){
  this.router.navigate(['/service']);
}
navigateToFashion(){
  this.router.navigate(['/fashion']);
}
navigateToReview(){
  this.router.navigate(['/review']);
}
navigateToHaveshare(){
  this.router.navigate(['/have-share']);
}
navigateToLogin(){
  this.router.navigate(['/login']);
}
navigateToSignup(){
  this.router.navigate(['/register']);
}
}
