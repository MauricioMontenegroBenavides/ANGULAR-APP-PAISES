import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./Pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./Pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./Pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./Pais/pages/ver-pais/ver-pais.component";

const routes:Routes=[
  {
    path:'',// Este es el path principal
    component:PorPaisComponent, // Se especifica que componente se desea mostrar
    pathMatch:'full'
  },
   {
     path:'region',
     component:PorRegionComponent
  },
  {
     path:'capital',
     component:PorCapitalComponent
 },
 {
     path:'pais/:id',
     component:VerPaisComponent
},
{
     path:'**', // Aqui se coloca la ruta que no sea ninguna de las anteriores
     redirectTo:''// Redirige al inicio de la app
     //componet:404Component se puede poner diciendo que esta pagina no existe
}
]// Aqui se inicializa las rutas de la aplicacion

@NgModule({
  imports:[RouterModule.forRoot(routes)],// forROOT es para las rutas principales, y forChild es para las rutas hijas
  exports:[RouterModule]// RouterModule es el que hace la configuracion de mis rutas
})// Solo existe un forROOT en toda la aplicacion
export class AppRouting{

}
