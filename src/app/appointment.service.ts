import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  getAppointments(){
    return this.http.get('http://localhost:8080/api')
  }

  addAppointment(appointment:any){
    return this.http.post('http://localhost:8080/api',appointment,httpOptions);
  }
  getAppointment(id:number){
    return this.http.get('http://localhost:8080/api/'+id);
  }
  updateAppointmentById(id:number,appointment:any){
    return this.http.put('http://localhost:8080/api'+id,appointment).subscribe();
  }
  deleteAppointmentById(id:number){
    return this.http.delete('http://localhost:8080/api'+id);
  }

}
