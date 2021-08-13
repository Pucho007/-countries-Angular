import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app.routing.module';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent
  ],
  exports:[
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
