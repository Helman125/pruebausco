import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCitaService } from 'src/app/Service/service-cita.service';
import { Cita } from 'src/app/Modelo/Cita';


@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent implements OnInit {

  id:string="";

  citaActual: Cita ={id:'',id_medico:'',id_paciente:'',id_consultorio:'', fecha:'',hora:'', estado:'Pendiente', observacion:''};
  constructor(private citaService: ServiceCitaService,
     private antivateRouter: ActivatedRoute, 
     private router: Router) { }

  ngOnInit(): void {
     
   }

}
