import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// Viene con todo lo necesario para suscrubirnos a cualquier cambio del url
import { ServicesPaisService } from '../../services/services-pais.service';
import { SearchPaisResponse } from '../../Interfaces/Pais.interfaces';
import { tap } from 'rxjs';// Es un operador que dispara algo secundario
import { switchMap } from 'rxjs';//Es un operador de tranformacion, permite recibir un observable y regresar otro observable
import { Pais } from '../../Interfaces/Paise-uno.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})



export class VerPaisComponent implements OnInit {

  verpais:any=[];// Este valor sin inicialixazr me da un error xq es null, al poner ? le ddecimos a typescript que confie en mi
   id:string='';
  // Primero se inicializa el constructor
  // Segundo es el ngOnitnit()
  constructor(private acti:ActivatedRoute,private ser:ServicesPaisService) { }// Aca es antes que se inicialice el componente

  ngOnInit() {// Aqui es cuando se inicializa el componente
    //pipe es una libreriae rx
            // EN PIPE SE PUEDE TRABAJAR LOS PRODUCTOS DEL OBSERVABLE
     this.acti.params
       .pipe(
        switchMap(({id})=>{return this.ser.getPaisCodigo(id)}),
        tap(pais2=>console.log(pais2))// Este tap ayuda a imprimir sin necesidad del suscript
    )
    .subscribe(resp=>{

      this.verpais =resp;
    }

    )
    /* //this.acti.params es un observable, hacemos un acceso al observable
    this.acti.params
    .subscribe (({id})=>{ // SE HACE UNA DESESTRUCTURACION id es un observable
      console.log('id++',id)// Se asocia al nombre para el id que esta en el routing
       this.ser.getPaisCodigo(id)
    .subscribe(pais=>{ // pais es otro observable
        console.log('pais---',pais)
      })
    }) */

    // HAY QUE HACER OTRO OBSERVABLE PARA TRAER LA INFORMACION DEL PAIS

  }

}
