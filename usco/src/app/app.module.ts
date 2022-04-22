import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AddMedicoComponent } from './Medico/add-medico/add-medico.component';
import { EditMedicoComponent } from './Medico/edit-medico/edit-medico.component';
import { ListarMedicoComponent } from './Medico/listar-medico/listar-medico.component';
import { AddCitaComponent } from './cita/add-cita/add-cita.component';
import { EditCitaComponent } from './cita/edit-cita/edit-cita.component';
import { ListarCitaComponent } from './cita/listar-cita/listar-cita.component';
import { AddConsultorioComponent } from './Consultorio/add-consultorio/add-consultorio.component';
import { EditConsultorioComponent } from './Consultorio/edit-consultorio/edit-consultorio.component';
import { ListarConsultorioComponent } from './Consultorio/listar-consultorio/listar-consultorio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddMedicoComponent,
    EditMedicoComponent,
    ListarMedicoComponent,
    AddCitaComponent,
    EditCitaComponent,
    ListarCitaComponent,
    AddConsultorioComponent,
    EditConsultorioComponent,
    ListarConsultorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
