import { Component, OnInit } from '@angular/core';
import { ServiceCitaService } from 'src/app/Service/service-cita.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  constructor(private citaService : ServiceCitaService) { }
  lista:any=[];
  ngOnInit(): void {
    this.listarCita();
  }
  listarCita(){
    this.citaService.getCita().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
      
    ); 
  }

}