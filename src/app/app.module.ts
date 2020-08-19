import { MobDataService } from './services/mob-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Module: Gorup of logic
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { ProductsComponent } from './layouts/products/products.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
import { MyStyleDirective } from './directives/my-style.directive';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { BooksComponent } from './products/books/books.component';
import { LaptopsComponent } from './products/laptops/laptops.component';

import { AppRoutimgModule } from './modules/app-routimg.module';
import { HomeComponent } from './products/home/home.component';
import { PageNotFoundComponent } from './products/page-not-found/page-not-found.component';
import { MotoComponent } from './products/mobiles/moto/moto.component';
import { SamComponent } from './products/mobiles/sam/sam.component';
import { MobileMenuComponent } from './products/mobiles/mobile-menu/mobile-menu.component';
import { ProductViewComponent } from './layouts/product-view/product-view.component';
import { TempFormComponent } from './forms/temp-form/temp-form.component';
import { ReactFormComponent } from './forms/react-form/react-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FirstComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    ProductsComponent,
    FooterComponent,
    SqrtPipe,
    MyStyleDirective,
    MobilesComponent,
    BooksComponent,
    LaptopsComponent,
    HomeComponent,
    PageNotFoundComponent,
    MotoComponent,
    SamComponent,
    MobileMenuComponent,
    ProductViewComponent,
    TempFormComponent,
    ReactFormComponent,
  ], //component : view
  imports: [
    BrowserModule,
    AppRoutimgModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
  ], // Module : logic
  bootstrap: [FirstComponent], // root comp
  providers: [MobDataService],
})
export class FirstModule {}
