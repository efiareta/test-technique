import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap, retry } from 'rxjs/operators';
import { Modele } from './types/modele';
@Injectable({
  providedIn: 'root',
})
export class Modele3dApiService {
  apiBaseUrl: string = 'http://localhost:3333';
  constructor(private httpRequester: HttpClient) {}
  getAllModele3D(): Observable<any> {
    return this.httpRequester.get(`${this.apiBaseUrl}/api/models`);
  }

  getModele3dById(id: string): Observable<any> {
    return this.httpRequester.get(`${this.apiBaseUrl}/api/models/${id}`);
  }

  addModele3d(modele3d: any): Observable<any> {
    modele3d.date = new Date().toISOString();
    return this.httpRequester.post(`${this.apiBaseUrl}/api/models`, modele3d);
  }
}
