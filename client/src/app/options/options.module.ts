import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OptionsComponent } from './options.component';

const router: Routes = [
  {
    path: '',
    component: OptionsComponent
  }
]


@NgModule({
  declarations: [
    OptionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class OptionsModule { }
