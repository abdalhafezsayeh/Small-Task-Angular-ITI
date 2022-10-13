import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './Orders/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ShadowDirective } from './Directive/shadow.directive';
import { ConvertIdNumberPipe } from './pipes/convert-id-number.pipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { OrderMasterComponent } from './Orders/order-master/order-master.component';
import { TableProductComponent } from './Orders/table-product/table-product.component';
import { LoginUpComponent } from './login-up/login-up.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { PtestComponent } from './ptest/ptest.component';
import { LoaderInterceptor } from './services/loader.interceptor';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductComponent,
    FooterComponent,
    ShadowDirective,
    ConvertIdNumberPipe,
    FormatNumberPipe,
    OrderMasterComponent,
    TableProductComponent,
    LoginUpComponent,
    LoginComponent,
    LogoutComponent,
    PtestComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    
 

  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
