import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { FooterComponent } from './component/footer/footer.component';
import { TermsConditionsComponent } from './component/terms-conditions/terms-conditions.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PaymenttypeComponent } from './component/paymenttype/paymenttype.component';
import { BlogserviceComponent } from './component/blogservice/blogservice.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartPageComponent,
    OrderPageComponent,
    CardPaymentComponent,
    CardOrderComponent,
    AboutUsComponent,
    BlogComponent,
    CategoryComponent,
    ServiceComponent,
    FashionComponent,
    ReviewComponent,
    HaveShareComponent,
    FooterComponent,
    TermsConditionsComponent,
    LoginComponent,
    RegisterComponent,
    PaymenttypeComponent,
    BlogserviceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
