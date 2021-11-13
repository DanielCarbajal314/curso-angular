import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getAllPhotos(): Observable<Photo[]>{
    return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
  }

  // nombreDelMetodo(parametro: TipoParametro): TipoDelRetorno {
  //   DefinicionDelMetodo
  // }

}
