import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent implements OnInit {

  constructor(private medicoService: ServiceService) { }


  lista:any=[];
  ngOnInit(): void {
    this.listarMedicos();
  }
  listarMedicos(){
    this.medicoService.getMedicos().subscribe(
      res=>{this.lista=res},
      err=>console.log(err)
      
    ); 
  }

}
