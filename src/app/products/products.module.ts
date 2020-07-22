import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ScanditSdkModule } from 'scandit-sdk-angular';

const routes:Routes = [
  {
      path: 'list',
      component: ProductListComponent,
  },
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScanditSdkModule,
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule { }
