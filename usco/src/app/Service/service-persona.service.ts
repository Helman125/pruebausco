import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonaService {
  Url= 'http://localhost:8080/api/paciente';
  constructor(private http:HttpClient) { }


  getPacientes():Observable<any>{
    return this.http.get(this.Url);
  }
  getUnPaciente(id: string):Observable<any>{
    return this.http.get(this.Url+'/'+id);
  }
  
  savePersona(persona: Persona):Observable<any>{
    return this.http.post(this.Url, persona);
  }

  editpersona(id: string, persona: Persona):Observable<any>{
    return this.http.put(this.Url+'/'+id , persona);
  }
}
