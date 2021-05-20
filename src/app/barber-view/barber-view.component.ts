import { ActivatedRoute } from '@angular/router';
import { BarberService } from './../barber.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barber-view',
  templateUrl: './barber-view.component.html',
  styleUrls: ['./barber-view.component.css']
})
export class BarberViewComponent implements OnInit {

  public barber:any;
  constructor(private barberService:BarberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBarbers();
    this.deleteBarberById(this.route.snapshot.params.id);
    
  }

  getBarbers(){
    return this.barberService.getBarbers().subscribe(
      data=>{this.barber = data 
      },
      err=>console.error(err),
      ()=> console.log('barber loaded')
    );
  }

  deleteBarberById(id : number){
    this.barberService.deleteBarberById(id).subscribe(
      data=>{console.log(data);
      this.ngOnInit();
      })
  }

  updateBarber(id:number, barber:any){
    this.barberService.updateBarberById(id,barber)
  }
}
