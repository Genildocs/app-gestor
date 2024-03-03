import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    title: 'App-gestor - Home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Home - dashboard',
        component: DashboardComponent,
      },
      {
        path: 'calendar',
        title: 'Home - calendar',
        component: CalendarComponent,
      },
    ],
  },
  { path: 'auth', title: 'App-gestor - Auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
