import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor(private http:HttpClient) { 
  }

  getBarbers(){
    return this.http.get('http://localhost:8080/barber')
  }

  addBarber(barber:any){
    return this.http.post('http://localhost:8080/barber',barber,httpOptions);
  }
  getBarber(id:number){
    return this.http.get('http://localhost:8080/barber'+id);
  }
  updateBarberById(id:number,barber:any){
    return this.http.put('http://localhost:8080/barber'+id,barber).subscribe();
  }
  deleteBarberById(id:number){
    return this.http.delete('http://localhost:8080/barber'+id);
  }

}
