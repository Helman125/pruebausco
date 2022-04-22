import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Medico } from '../Modelo/Medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Url= 'http://localhost:8080/api/medico';
  
  constructor(private http:HttpClient) { }

 

  
  getMedicos():Observable<any>{
    return this.http.get(this.Url);
  }
  getUnMedico(id: string):Observable<any>{
    return this.http.get(this.Url+'/'+id);
  }
  
  saveMedico(medico: Medico):Observable<any>{
    return this.http.post(this.Url, medico);
  }

  editMedico(id: string, medico: Medico):Observable<any>{
    return this.http.put(this.Url+'/'+id , medico);
  }
}
