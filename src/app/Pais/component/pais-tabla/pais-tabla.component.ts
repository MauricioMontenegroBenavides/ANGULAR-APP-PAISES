import { Component, OnInit } from '@angular/core';
import { SearchPaisResponse } from '../../Interfaces/Pais.interfaces';
import { Input } from '@angular/core';
@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  constructor() { }

 @Input() paises:SearchPaisResponse[]=[]

}
