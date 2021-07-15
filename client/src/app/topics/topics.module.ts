import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { TopicsComponent } from './topics.component';

const router: Routes = [
  {
    path: '',
    component: TopicsComponent
  }
]

@NgModule({
  declarations: [
    TopicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(router)
  ]
})
export class TopicsModule { }
