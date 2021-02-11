import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import {LOCALE_ID} from '@angular/core';

// Import for loading & configuring in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './shared/product.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductData } from './shared/product-data';
import { HttpClientModule } from '@angular/common/http';
import { ProductNewComponent } from './product-new/product-new.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductNewComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(ProductData),
    SharedModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
