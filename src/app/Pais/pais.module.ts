import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './component/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './component/pais-input/pais-input.component';

@NgModule({
  declarations: [
        PorPaisComponent,
        PorCapitalComponent,
        PorRegionComponent,
        VerPaisComponent,
        PaisTablaComponent,
        PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    PorPaisComponent,
    PorCapitalComponent,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisModule { }
