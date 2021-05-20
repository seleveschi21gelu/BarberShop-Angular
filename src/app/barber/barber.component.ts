import { BarberService } from './../barber.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators'


@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.css']
})
export class BarberComponent implements OnInit {

  barberList:any;

barberForm = new FormGroup({
  name: new FormControl('',Validators.required),
  telephone: new FormControl('',Validators.required),
  description: new FormControl('',Validators.required)

});
validMessage: string="";
  barberRegistration:any;
  isAddMode:any;
  readonly:boolean =false;

  constructor(private barberService:BarberService,private route: ActivatedRoute) { }

  ngOnInit(): void {

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

    } else { this.barberService.addBarber(this.barberForm.value).subscribe();
          this.validMessage = "Barber submitted."

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


