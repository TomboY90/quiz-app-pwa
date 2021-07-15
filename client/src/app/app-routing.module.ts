import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'topics',
    loadChildren: () => import('./topics/topics.module').then(m => m.TopicsModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then(m => m.OptionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
