import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { ServicesPaisService } from '../../services/services-pais.service';
import { SearchPaisResponse } from '../../Interfaces/Pais.interfaces';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent  {
  bus:string='hola'
  termino:string=''
  capital:SearchPaisResponse[]=[]
  error:boolean=false
  placeho:string='Buscar capital'

  constructor(private ser:ServicesPaisService) { }

  buscarCapi(termino:string){

    this.error=false
    this.termino=termino
    console.log(this.termino)
    this.ser.buscarCapital(this.termino)
    .subscribe( res=>{

      console.log(res)

      this.capital=res
      console.log('capital',this.capital)
      this.termino=''
    },err=>{
      this.error=true
    }
    )

  }

}
