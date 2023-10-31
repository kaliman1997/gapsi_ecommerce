import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private _http: HttpClient) { 
  }

  addProvider(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/providers', data);
  }

  getProviderList(): Observable<any>{
    return this._http.get('http://localhost:3000/providers');
  }

  deleteProvider(nombre : string): Observable<any>{
    return  this._http.delete(`http://localhost:3000/providers/${nombre}`)
  }
}
