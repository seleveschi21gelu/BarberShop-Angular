import { BarberService } from './barber.service';
import { AppointmentService } from './appointment.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarberComponent } from './barber/barber.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarberViewComponent } from './barber-view/barber-view.component';
import { BarberViewByIdComponent } from './barber-view-by-id/barber-view-by-id.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AppointmentviewComponent } from './appointmentview/appointmentview.component';


@NgModule({
  declarations: [
    AppComponent,
    BarberComponent,
    AppointmentComponent,
    BarberViewComponent,
    BarberViewByIdComponent,
    FirstPageComponent,
    AppointmentviewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppointmentService,BarberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
