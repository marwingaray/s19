import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ApirestComponent } from './apirest/apirest.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    ApirestComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    ApirestComponent,
    MenuComponent
  ],
})
export class PrincipalModule { }
