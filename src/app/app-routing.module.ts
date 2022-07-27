import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './components/directory/directory.component';
import { MiddleareaComponent } from './components/middlearea/middlearea.component';

const routes: Routes = [
  {
    path: 'directory',
    component: DirectoryComponent
  },
  {
    path: '',
    component: MiddleareaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
