import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { T1Component } from './mainapp/t1/t1.component';
import { MainComponent } from './mainapp/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 't1',
    component: T1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
