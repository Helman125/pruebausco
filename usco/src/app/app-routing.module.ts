import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCitaComponent } from './cita/add-cita/add-cita.component';
import { EditCitaComponent } from './cita/edit-cita/edit-cita.component';
import { ListarCitaComponent } from './cita/listar-cita/listar-cita.component';
import { AddConsultorioComponent } from './Consultorio/add-consultorio/add-consultorio.component';
import { EditConsultorioComponent } from './Consultorio/edit-consultorio/edit-consultorio.component';
import { ListarConsultorioComponent } from './Consultorio/listar-consultorio/listar-consultorio.component';
import { AddMedicoComponent } from './Medico/add-medico/add-medico.component';
import { EditMedicoComponent } from './Medico/edit-medico/edit-medico.component';
import { ListarMedicoComponent } from './Medico/listar-medico/listar-medico.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'personaListar', component: ListarComponent},
  {path:'personaAdd', component: AddComponent},
  {path:'personaEditar', component: EditComponent},

  {path:'medicoListar', component: ListarMedicoComponent},
  {path:'medicoAdd', component: AddMedicoComponent},
  {path:'medicoEditar', component: EditMedicoComponent},

  {path:'citaListar', component: ListarCitaComponent},
  {path:'citaAdd', component: AddCitaComponent},
  {path:'citaEditar', component: EditCitaComponent},

  {path:'consultorioListar', component: ListarConsultorioComponent},
  {path:'consultorioAdd', component: AddConsultorioComponent},
  {path:'consultorioEditar', component: EditConsultorioComponent}

  

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
