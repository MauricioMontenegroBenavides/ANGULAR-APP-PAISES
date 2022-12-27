import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicesPaisService } from '../../services/services-pais.service';
import { SearchPaisResponse } from '../../Interfaces/Pais.interfaces';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})

export class PaisInputComponent implements OnInit {

  termino:string=''
  @Input()placehol:string=''
  // El debouncer se emite cuando dejo de escribir
  debou:Subject<string>=new Subject()// El subject es un observable, en esta linea se crea un subject

  @Output() ONEnter:EventEmitter<string>=new EventEmitter()
  @Output() onBounce:EventEmitter<string>=new EventEmitter()// Bounce se va emitir cuando la gente deja de escribir

  constructor(private paisSerr:ServicesPaisService) { }// El Dbonce es mas faacil con los formularios reactivos
  ngOnInit(){ // El ngOnInit se dispara una sola vez cuando el componente es creado
    // subscribe significa que se va a suscribir a los eventos
     const inp=document.querySelector('input')
     inp?.setAttribute("placeholder", this.placehol);

     this.debou
     .pipe(// El pipe es una tuberia o una conexion a una manguera que permite transformar la salida del subscribe
        debounceTime(300)// Cuanto tiempo me espera para emitir el siguiente valor, no emite el subscribe hasta que pasa 1 segundo
     )
     .subscribe(valor=>{
       console.log('d',valor)
       this.onBounce.emit(valor)
     })
  }

  buscar(){

    console.log(this.termino)
    this.ONEnter.emit(this.termino)
  }


  teclaPresionada(){
    this.debou.next(this.termino)
    console.log(this.termino)
  }
}

// Cuando es un obserbable puedo trabajarlo con RX
// Rx viene con un obsebable especial llamado subject
// El subject permite crear un observable manualmente


//////////////////////////////////////////////////////////////////////////////

//Crear un Ouput con la variable que se desea emitir
// Crear una variable de tipo subject la q permite q se ejecute un evento despues de escribir
// En el HTML crear un input y asociar a un metodo donde se va a tomar el valor que se escriba
// Dentro del metodo OnInit() poner la variable creada en el subject, aosciarle a un pipe(mide el tiempo), y despues asociarle a un subscribe()
// Dentro del subscribe crar una funcion qur tome el valor entregado por el input
// El valor del input es tomado por el metodo asociado al input, dentro del metodo hay q enviarlo al subscribe mediante el llamado a la variable del suscribe y el next
// Una vez aue se tiene el valor en el subscribe se lo envia mediante el Ouput-EMIT, DESDE EL SUBSCRIBE
