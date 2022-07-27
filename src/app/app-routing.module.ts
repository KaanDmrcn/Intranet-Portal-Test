import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './mainapp/main/main.component';
import { T1Component } from './mainapp/t1/t1.component';
import { T2Component } from './mainapp/t2/t2.component';
import { T3Component } from './mainapp/t3/t3.component';
import { T4Component } from './mainapp/t4/t4.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 't1',
    component: T1Component
  },
  {
    path: 't2',
    component: T2Component
  },
  {
    path: 't3',
    component: T3Component
  },
  {
    path: 't4',
    component: T4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
