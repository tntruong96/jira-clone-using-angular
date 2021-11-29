import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from '../app/project/project.component';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () => import('../app/project/project.module').then((m) => m.ProjectModule)
  },
  { path: '', redirectTo: 'project', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
