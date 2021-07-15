import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './game.component';

const router: Routes = [
  {
    path: '',
    component: GameComponent
  }
]


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class GameModule { }
