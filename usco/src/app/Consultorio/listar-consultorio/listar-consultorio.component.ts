import { Component, OnInit } from '@angular/core';
import { ServiceConsultorioService } from 'src/app/Service/service-consultorio.service';

@Component({
  selector: 'app-listar-consultorio',
  templateUrl: './listar-consultorio.component.html',
  styleUrls: ['./listar-consultorio.component.css']
})
export class ListarConsultorioComponent implements OnInit {
  constructor(private consultorioService : ServiceConsultorioService) { }
  lista:any=[];
  ngOnInit(): void {
    this.listarConsultorio();
  }
  listarConsultorio(){
    this.consultorioService.getConsultorios().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
      
    ); 
  }

}