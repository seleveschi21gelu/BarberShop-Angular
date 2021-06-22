import { AppointmentViewByIdComponent } from './appointment-view-by-id/appointment-view-by-id.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarberComponent } from './barber/barber.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BarberViewComponent } from './barber-view/barber-view.component';
import { AppointmentviewComponent } from './appointmentview/appointmentview.component';

const routes: Routes=[

  { path:'barber',
    component:BarberComponent
  },
  {
    path:'barber/view',
    component:BarberViewComponent
  },{
    path: 'appointment/view/:id',
    component:AppointmentViewByIdComponent
  },

  {
    path:'appointment',
    component:AppointmentComponent
  },
    {
    path:'appointment/view',
    component:AppointmentviewComponent
  }
,
  { path:'',
component:FirstPageComponent
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
