import { Component, Input, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  @Input() paises: PaisInterface[]=[]

  constructor() { }




}
