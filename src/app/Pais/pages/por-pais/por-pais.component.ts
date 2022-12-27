import { Component, } from '@angular/core';
import { ServicesPaisService } from '../../services/services-pais.service';
import { SearchPaisResponse } from '../../Interfaces/Pais.interfaces';
import { Input } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`

  li{

    cursor:pointer;
  }

  `]
})

export class PorPaisComponent {

  termino:string=''
  error:boolean=false
  paises:SearchPaisResponse[]=[];
  placeho:string='Por país'
  paises_Sugeridos:SearchPaisResponse[]=[];

  constructor(private paisSer:ServicesPaisService){}
  buscar(termino:string){
    this.termino=termino
    this.error=false
    if(this.termino.trim().length===0){
       return
    }
    this.paisSer.buscarPais(this.termino)
    .subscribe((resp:SearchPaisResponse[])=>{// Para que un observable se ejecute debe existir un suscribe
      this.termino=''
      this.paises=resp
      console.log(this.paises[0].cca2)
      },
      (err)=>{//Solo entra cuando existe error
         this.error=true
         //Hay dos formas de manejar los errores una del lado donde se consume y otra donde se hace la peticion
      }
    )
  }

  sugerencias(termino:string){
    console.log(termino)
    this.error= false

    this.paisSer.buscarPais(termino)// El arreglo paises_Sugeridos se encarga de mostrar las sugerencias

    .subscribe(paises=>{

      this.paises_Sugeridos=paises.slice(0,5)

      console.log(this.paises_Sugeridos)


    },(err)=>this.paises_Sugeridos=[])

  }
}

