import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { ServicePersonaService } from 'src/app/Service/service-persona.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pacienteNuevo: Persona ={id:'',nombre:'',apellido:'',direccion:'',telefono:'',rol:'Paciente'};
  constructor(private medicoService: ServicePersonaService, private router: Router) { 
  
  }

  ngOnInit(): void {
  }

  agregarPaciente(){
    this.medicoService.savePersona(this.pacienteNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/personaListar'])
        ;
      },
      err=>console.log(err)
    );
  }

}
