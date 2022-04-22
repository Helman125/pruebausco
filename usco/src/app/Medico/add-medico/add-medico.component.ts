import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/Modelo/Medico';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-medico',
  templateUrl: './add-medico.component.html',
  styleUrls: ['./add-medico.component.css']
})
export class AddMedicoComponent implements OnInit {
  medicoNuevo: Medico ={id:'',nombre:'',apellido:'',direccion:'',telefono:'',rol:'Medico'};
  constructor(private medicoService: ServiceService, private router: Router) { 
  
  }

  ngOnInit(): void {
  }

  agregarMedico(){
    this.medicoService.saveMedico(this.medicoNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/personaListar'])
        ;
      },
      err=>console.log(err)
    );
  }

}
