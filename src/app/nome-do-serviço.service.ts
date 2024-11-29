import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomeDoServicoService {
  private baseUrl = 'https://api.api-onepiece.com/v2/characters/en';

  constructor(private http: HttpClient) { }

  searchCharacter(name: string): Observable<any> { return this.http.get(`${this.baseUrl}/search`, { params: { name } });  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Outros métodos, se necessário
}
