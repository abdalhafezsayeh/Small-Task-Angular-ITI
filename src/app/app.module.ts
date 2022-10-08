import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './Orders/product/product.component';
import { FooterComponent } from './footer/footer.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ShadowDirective } from './Directive/shadow.directive';
import { ConvertIdNumberPipe } from './pipes/convert-id-number.pipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { OrderMasterComponent } from './Orders/order-master/order-master.component';
import { TableProductComponent } from './Orders/table-product/table-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ProductComponent,
    FooterComponent,
    LoginUserComponent,
    ShadowDirective,
    ConvertIdNumberPipe,
    FormatNumberPipe,
    OrderMasterComponent,
    TableProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
