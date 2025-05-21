import { Routes } from '@angular/router';
import { AdminPreciosComponent } from '../components/admin-precios/admin-precios.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin-precios', pathMatch: 'full' },
  { path: 'admin-precios', component: AdminPreciosComponent }
];
