import { ProductViewComponent } from './../layouts/product-view/product-view.component';
import { MobileMenuComponent } from './../products/mobiles/mobile-menu/mobile-menu.component';
import { SamComponent } from './../products/mobiles/sam/sam.component';
import { MotoComponent } from './../products/mobiles/moto/moto.component';
import { PageNotFoundComponent } from './../products/page-not-found/page-not-found.component';
import { HomeComponent } from './../products/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MobilesComponent } from '../products/mobiles/mobiles.component';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { BooksComponent } from '../products/books/books.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home/:varName',
    component: HomeComponent,
  },
  {
    path: 'mobile',
    component: MobileMenuComponent,
    children: [
      { path: '', component: MobilesComponent },
      { path: 'moto', component: MotoComponent },
      { path: 'sam', component: SamComponent },
    ],
  },
  // {
  //   path: 'lapi',
  //   component: LaptopsComponent,
  // },
  {
    path: 'lapi/:myNum',
    component: LaptopsComponent,
  },
  { path: 'product-view/:prod', component: ProductViewComponent },
  {
    path: 'book',
    component: BooksComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutimgModule {}
