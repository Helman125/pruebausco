import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../Modelo/Cita';

@Injectable({
  providedIn: 'root'
})
export class ServiceCitaService {
  Url= 'http://localhost:8080/api/cita';
  constructor(private http:HttpClient) { }


  getCita():Observable<any>{
    return this.http.get(this.Url);
  }
  getUnCita(id: string):Observable<any>{
    return this.http.get(this.Url+'/'+id);
  }
  
  saveCita(cita: Cita):Observable<any>{
    return this.http.post(this.Url, cita);
  }

  editCita(id: string, cita: Cita):Observable<any>{
    return this.http.put(this.Url+'/'+id , cita);
  }
}
