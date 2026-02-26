import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Recibe un booleano para decidir si altera la URL
  listar(forzarError: boolean = false): Observable<any[]> {
    const urlFinal = forzarError ? this.api + '-ruta-rota' : this.api;
    return this.http.get<any[]>(urlFinal);
  }
}