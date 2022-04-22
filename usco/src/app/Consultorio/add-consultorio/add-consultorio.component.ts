import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/Modelo/Consultorio';
import { ServiceConsultorioService } from 'src/app/Service/service-consultorio.service';


@Component({
  selector: 'app-add-consultorio',
  templateUrl: './add-consultorio.component.html',
  styleUrls: ['./add-consultorio.component.css']
})
export class AddConsultorioComponent implements OnInit {

  consultorioNuevo: Consultorio ={id:'',departamento:'',municipio:'',direccion:''};
  constructor(private consultorioService: ServiceConsultorioService, private router: Router) { 
  
  }

  ngOnInit(): void {
  }

  agregarConsultorio(){
    this.consultorioService.saveConsultorio(this.consultorioNuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/consultorioListar'])
        ;
      },
      err=>console.log(err)
    );
  }

}
