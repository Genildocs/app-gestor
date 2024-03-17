import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { IconsModule } from './icons/icons.module';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { FinancasModule } from './financeiro/financas.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SideBarComponent,
    DashboardComponent,
    CalendarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    IconsModule,
    FinancasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
