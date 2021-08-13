import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[]=['americas', 'asia', 'europe', 'oceania'];
  paises:PaisInterface[]=[];

  terminoActivado:string='';
  loading:boolean;


  constructor(private paisService:PaisService) {
    this.loading=false;
   }

  ngOnInit(): void {
  }

  aniadirClase(termino:string):string{
    return (termino===this.terminoActivado) ? 'seleccionado' : 'no-seleccionado';
  }

  seleccionarRegion(region:string){
    this.terminoActivado=region;
    this.buscar(region)
  }


  buscar(region:string){
    this.loading=true;
    this.paisService.buscarByRegion(region)
      .subscribe((resp)=>{
        this.paises=resp;
        this.loading=false;
      },(error)=>{
        this.paises=[];
        this.loading=false;
      });
  }



}
