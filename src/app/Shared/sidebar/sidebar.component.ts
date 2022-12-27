import { Component, OnInit } from '@angular/core';


interface error{
  exact:boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`li{cursor:pointer}
  li{color:black}`]//angular Permite trabajar el css encapsulado por componente
})


export class SidebarComponent  {


}
