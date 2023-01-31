import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Albums } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsServiceService {

  constructor(private http: HttpClient) { }
  apiURL = environment.apiREST + 'albums/';

 getUsersAll():Observable<Albums[]>{
   return this.http.get<Albums[]>(this.apiURL);
  }
  getUserId(userId: string): Observable<Albums> {
    const url = this.apiURL + userId;
    return this.http.get<Albums>(url);
  }
  // Metodo POST para enviar datos a la API users
  postUser(id: Albums): Observable<Albums>{
    return this.http.post<Albums>(this.apiURL, id);
  }
  getAlbums():Observable<Albums[]>{
    return this.http.get<Albums[]>(this.apiURL);
  }

}