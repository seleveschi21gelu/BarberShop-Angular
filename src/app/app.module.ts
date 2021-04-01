import { BarberService } from './barber.service';
import { AppointmentService } from './appointment.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarberComponent } from './barber/barber.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BarberComponent,
    AppointmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppointmentService,BarberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
