import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarberService } from './../barber.service';
import { AppointmentService } from './../appointment.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  barberList:any;
  appointmentForm : FormGroup;
  validMessage: string = "";
  appointmentRegistration: any;
  isAddMode:any;
  readonly: boolean = false;


  constructor(private appointmentService:AppointmentService,private barberService:BarberService, private route:ActivatedRoute) {
    this.barberService.getBarbers().subscribe(barber=>this.barberList=barber);
   }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.isAddMode = !id;

    this.appointmentForm=new FormGroup({
      client: new FormControl('', Validators.required),
      date: new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      time: new FormControl('',Validators.required),
      barber:new FormControl('',Validators.required)
    });

    if(this.isAddMode) {
      this.appointmentService.getAppointment(id)
      .pipe(first())
      .subscribe(x=> this.appointmentForm.patchValue(x))
    }

    }

    submitRegistration(){
      let id = this.route.snapshot.params.id;
      if(id){
        this.appointmentService.updateAppointmentById(id, this.appointmentForm.value);
        this.validMessage="Appointment updated"
      }
      else if(this.appointmentForm?.valid){
        this.appointmentService.addAppointment(this.appointmentForm.value).subscribe();
        this.validMessage="Appointment registrated"
      }
      else{
        this.validMessage="The form isn't complete"
      }
    }

    getAppointmentRegistration(id:number){
      this.appointmentService.getAppointment(id).subscribe(
        data=>{this.appointmentRegistration=data;
        },
        err=>console.error(err),
        ()=>console.log('appointment loaded')
      );
    }


  }

