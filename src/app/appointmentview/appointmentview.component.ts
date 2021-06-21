import { AppointmentService } from './../appointment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointmentview',
  templateUrl: './appointmentview.component.html',
  styleUrls: ['./appointmentview.component.css']
})
export class AppointmentviewComponent implements OnInit {

  public appointment: any;

  constructor(private appointmentService:AppointmentService, private route:ActivatedRoute) { }

  ngOnInit(): void {
this.getAppointment();
  }

getAppointment(){
  this.appointmentService.getAppointments().subscribe(
data=> {
  console.log(data)
  this.appointment = data},
  err=>console.error(err),
  ()=> console.log('appointment loaded')
  );

}

deleteAppointmentById(id:number){
  this.appointmentService.deleteAppointmentById(id).subscribe(
    data=>{console.log(data);
    this.ngOnInit();
  })
}

}
