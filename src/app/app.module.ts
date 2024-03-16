import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { DividasComponent } from './components/dividas/dividas.component';
import { MatTableModule } from '@angular/material/table';
import { ReceitasComponent } from './components/receitas/receitas.component';
import { IconsModule } from './icons/icons/icons.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    SideBarComponent,
    DashboardComponent,
    CalendarComponent,
    HeaderComponent,
    DividasComponent,
    ReceitasComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
