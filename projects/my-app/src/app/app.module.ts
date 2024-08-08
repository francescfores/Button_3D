// import { Button3dComponent } from '../../../button3d/src/lib/button3d.component';  // Asegúrate de importar el módulo de la biblioteca
// import { Button3dComponent } from '../../../button3d/src/lib/button3d/button3d.component';  // Asegúrate de importar el módulo de la biblioteca
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Button3dComponent } from 'button3d';  // Asegúrate de importar el módulo de la biblioteca

import { AppComponent } from './app.component';
@NgModule({
  declarations: [

    ],
  imports: [CommonModule, Button3dComponent, AppComponent],
  exports: [Button3dComponent],

})
export class AppModule { }
