import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { CardPaymentComponent } from './component/card-payment/card-payment.component';
import { CardOrderComponent } from './component/card-order/card-order.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { CategoryComponent } from './component/category/category.component';
import { ServiceComponent } from './component/service/service.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { ReviewComponent } from './component/review/review.component';
import { HaveShareComponent } from './component/have-share/have-share.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PaymenttypeComponent } from './component/paymenttype/paymenttype.component';
import { BlogserviceComponent } from './component/blogservice/blogservice.component';

const routes: Routes = [
  {path:'',component:ProductViewComponent},
  {path:'product-detail/:productid',component:ProductDetailComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'order-page',component:OrderPageComponent},
  {path:'cardpay',component:CardPaymentComponent},
  {path:'cardorder',component:CardOrderComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'blog',component:BlogComponent},
  {path:'category',component:CategoryComponent},
  {path:'service',component:ServiceComponent},
  {path:'fashion',component:FashionComponent},
  {path:'review',component:ReviewComponent},
  {path:'have-share',component:HaveShareComponent},
  {path:'terms-conditions',component:TermsConditionsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'paymenttype',component:PaymenttypeComponent},
  {path:'blogservice',component:BlogserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
