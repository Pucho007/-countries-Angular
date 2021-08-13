import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:PaisInterface

  constructor(
    private activateRouter:ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {
    this.activateRouter.params
      .pipe(
        switchMap(({id})=> this.paisService.buscarById(id)),
        tap(console.log)
      )
      .subscribe(
        pais=>{
          this.pais=pais;
        }
      )
  }

}
