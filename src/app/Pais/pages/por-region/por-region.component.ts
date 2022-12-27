import { Component, OnInit } from '@angular/core';

import { ServicesPaisService } from '../../services/services-pais.service';
import { SearchPaisResponse } from '../../Interfaces/Pais.interfaces';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`

  button{

    margin-right:10px
  }


  `]
})
export class PorRegionComponent  {

  regiones=['africa', 'americas', 'asia', 'europe', 'oceania']

  regionActiva=""

  Pais_Region:any=[]


  constructor(private ser:ServicesPaisService) { }

  ActivarRegion(region:string){

    this.regionActiva=region
    this.ser.getRegion(region).subscribe(res=>{
    this.Pais_Region=res
    console.log(this.Pais_Region)
  })




  }


}
