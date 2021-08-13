import { Component, OnInit, Output, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {


  termino:string='';
  is404: boolean=false;
  paises: PaisInterface[]=[];
  placeHolder:string='Perú, Chile, España...';
  loading:boolean
  constructor(private paisService: PaisService) { 
    this.loading=false;
  }


  buscar(termino:string){
    this.loading=true;
    this.is404=false;
    this.termino=termino;
    this.paisService.buscar(termino)
      .subscribe((resp)=>{
        this.paises=resp;
        this.loading=false;
      },(error)=>{
        this.is404=true;
        this.paises=[];
        this.loading=false;
      });
    this.termino='';
  }

  sugerencias(termino:string ){
    this.is404=false;
  }
}
