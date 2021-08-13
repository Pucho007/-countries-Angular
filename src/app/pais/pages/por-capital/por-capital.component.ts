import { Component, Input } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  

  termino:string='';
  is404: boolean=false;
  paises: PaisInterface[]=[];
  loading: boolean;

  constructor(private paisService: PaisService) { 
    this.loading=false;
  }


  buscar(termino:string){
    this.loading=true;
    this.is404=false;
    this.termino=termino;
    this.paisService.buscarCapital(termino)
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
