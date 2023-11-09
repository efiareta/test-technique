import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modele } from '../types/modele';
@Injectable({
  providedIn: 'root',
})
export class Modele3dApiService {
  apiBaseUrl = 'http://localhost:3333';
  constructor(private httpRequester: HttpClient) {}
  getAllModele3D(): Observable<Modele[]> {
    return this.httpRequester.get<Modele[]>(`${this.apiBaseUrl}/api/models`);
  }

  getModele3dById(id: string): Observable<Modele> {
    return this.httpRequester.get<Modele>(
      `${this.apiBaseUrl}/api/models/${id}`
    );
  }

  addModele3d(modele3d: Modele): Observable<Modele> {
    modele3d.date = new Date().toISOString();
    return this.httpRequester.post<Modele>(
      `${this.apiBaseUrl}/api/models`,
      modele3d
    );
  }
}
