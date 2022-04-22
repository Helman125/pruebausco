import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/Modelo/Cita';
import { ServiceCitaService } from 'src/app/Service/service-cita.service';
import { ServicePersonaService } from 'src/app/Service/service-persona.service';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent implements OnInit {

 
  citaNueva: Cita ={id:'',id_medico:'',id_paciente:'',id_consultorio:'', fecha:'',hora:'', estado:'Pendiente', observacion:''};
  constructor(private citaService: ServiceCitaService, private router: Router, private medicoService: ServiceService, private pacienteService: ServicePersonaService) { 
    
  }
  lista:any=[];
  lista2:any=[];

  ngOnInit(): void {
    this.listarMedicos();
    this.listarPacientes();
  }

  agregarCita(){
    console.log(this.citaNueva);
    this.citaService.saveCita(this.citaNueva).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/citaListar'])
        ;
      },
      err=>console.log(err)
    );
  }
  listarMedicos(){
    this.medicoService.getMedicos().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
      
    ); 
  }
  listarPacientes(){
    this.pacienteService.getPacientes().subscribe(
      res=>{this.lista2=res},
      err=>console.log(err)
      
    ); 
  }
  agregarMedico(event:any){
    
    this.citaNueva.id_medico= event.value
  }
  agregarPaciente(event:any){
    
    this.citaNueva.id_paciente= event.value
  }


}