import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultorio } from '../Modelo/Consultorio';

@Injectable({
  providedIn: 'root'
})
export class ServiceConsultorioService {
  Url= 'http://localhost:8080/api/consultorio';
  constructor(private http:HttpClient) { }


  getConsultorios():Observable<any>{
    return this.http.get(this.Url);
  }
  getUnConsultorio(id: string):Observable<any>{
    return this.http.get(this.Url+'/'+id);
  }
  
  saveConsultorio(consultorio: Consultorio):Observable<any>{
    return this.http.post(this.Url, consultorio);
  }

  editConsultorio(id: string, consultorio: Consultorio):Observable<any>{
    return this.http.put(this.Url+'/'+id , consultorio);
  }
}
