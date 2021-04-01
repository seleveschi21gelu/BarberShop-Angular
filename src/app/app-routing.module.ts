import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarberComponent } from './barber/barber.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes=[

  { path:'barber',
    component:BarberComponent
  },

  {
    path:'home',
    component:AppointmentComponent
  }

]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
