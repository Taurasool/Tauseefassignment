// import { Routes } from '@angular/router';

// export const routes: Routes = [];










// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   },
//   {
//     path: 'dashboard',
//     loadChildren: () =>
//       import('./components/dashboard/dashboard.module').then(
//         (m) => m.DashboardModule
//       ), // ✅ Lazy loaded dashboard module
//   },
// ];






import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // ✅ Standalone component directly load karo
  },
];
