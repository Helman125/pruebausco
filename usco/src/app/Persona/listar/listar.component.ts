import { Component, OnInit } from '@angular/core';
import { ServicePersonaService } from 'src/app/Service/service-persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private pacienteService : ServicePersonaService) { }
  lista:any=[];
  ngOnInit(): void {
    this.listarPacientes();
  }
  listarPacientes(){
    this.pacienteService.getPacientes().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
      
    ); 
  }

}