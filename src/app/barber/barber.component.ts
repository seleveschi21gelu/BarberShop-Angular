import { BarberService } from './../barber.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css']
})
export class BarberComponent implements OnInit {

barberForm : FormGroup;
validMessage: string="";
  barberRegistration:any;
  isAddMode:any;
  readonly:boolean =false;

  constructor(private barberService:BarberService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.barberForm=new FormGroup({
      name: new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    
    })
    let id = this.route.snapshot.params.id;         
    this.isAddMode = !id;

    if(!this.isAddMode) {
      this.barberService.getBarber(id)
        .pipe(first())
        .subscribe(x => this.barberForm.patchValue(x))
    }
    
  }

  submitRegistration(){
    let id = this.route.snapshot.params.id;
    if(id){
      this.barberService.updateBarberById(id,this.barberForm.value);
      this.validMessage="Barber updated"
    } else if(this.barberForm?.valid){
      this.validMessage = "Barber submitted."
      this.barberService.addBarber(this.barberForm.value).subscribe();
    } else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }

  getBarberRegistration(id:number){
    this.barberService.getBarber(id).subscribe(
      data=>{this.barberRegistration=data;
      },
      err=> console.error(err),
      ()=>console.log('barber loaded')
      
    )
  }

}


