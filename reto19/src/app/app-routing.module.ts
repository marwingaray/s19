import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApirestComponent } from './principal/apirest/apirest.component';


const routes: Routes = [
  {path: 'apiRest', component: ApirestComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
