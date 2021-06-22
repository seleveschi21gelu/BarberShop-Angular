import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from './../appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-view-by-id',
  templateUrl: './appointment-view-by-id.component.html',
  styleUrls: ['./appointment-view-by-id.component.css']
})
export class AppointmentViewByIdComponent implements OnInit {

  public appointmentRegistration: any;

  constructor(private appointmentService:AppointmentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAppointmentRegistration(this.route.snapshot.params.id);
  }

getAppointmentRegistration(id : number){
  this.appointmentService.getAppointment(id).subscribe(
    data=>{this.appointmentRegistration=data;
    },
    err=>console.error(err),
    ()=>console.log('appointment loaded')
  )
}

}
