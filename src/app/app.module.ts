import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioPracticaComponent } from './formulario-practica/formulario-practica.component';
import { FormularioPractica2Component } from './formulario-practica-2/formulario-practica-2.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioReactivoComponent,
    FormularioPracticaComponent,
    FormularioPractica2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
