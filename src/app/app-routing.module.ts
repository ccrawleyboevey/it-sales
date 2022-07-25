import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'sales',
    loadChildren: () => import('./sales/sales.module').then( m => m.SalesModule )
  },   
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },      
  {
    path: '404',
    component: ErrorPageComponent
  },   
  {
    path: '**',
    redirectTo: 'sales'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
