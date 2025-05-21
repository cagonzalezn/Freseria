import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  private apiUrl = 'http://localhost:5000/api/precios';

  constructor(private http: HttpClient) {}

  getPrecios(ingrediente: string) {
    return this.http.get<any[]>(`${this.apiUrl}?ingrediente=${ingrediente}`);
  }
}
