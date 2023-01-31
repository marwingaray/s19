import { Component } from '@angular/core';
import { Albums } from 'src/app/models/albums';
import { AlbumsServiceService } from 'src/app/services/albums-service.service';

@Component({
  selector: 'app-apirest',
  templateUrl: './apirest.component.html',
  styleUrls: ['./apirest.component.css']
})
export class ApirestComponent {

  // Crear instancia de UserServices 
  constructor(private AlbumsService : AlbumsServiceService){}
  
  newListado = new Array()

  ngOnInit(){
    this.AlbumsService.getUsersAll().subscribe({
      next: (AlbumsAll: Albums[]) => this.newListado = AlbumsAll,
      complete: () => console.info("La API devolvio todos los registros")
      });
  }

}
