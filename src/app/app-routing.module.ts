import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DividasComponent } from './financeiro/dividas/dividas.component';
import { ReceitasComponent } from './financeiro/receitas/receitas.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

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
      {
        path: 'dividas',
        title: 'Home - dividas',
        component: DividasComponent,
      },
      {
        path: 'receitas',
        title: 'Home - receitas',
        component: ReceitasComponent,
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
