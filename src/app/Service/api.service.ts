import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Api } from '../Classes/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:9095/api';
  constructor(private http: HttpClient) { }

  //  add new Api
addApi(api : Api): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/ajouterApi`, api)
    .pipe(
      catchError(this.handleError)
    );
}
private handleError(error: HttpErrorResponse): Observable<never> {
  console.error('Une erreur s\'est produite:', error);
  return throwError('Une erreur s\'est produite. Veuillez réessayer.');
}

// filter apis
filtrerApi(nom : string): Observable <Api[]>{
  const params = new HttpParams().set('nom', nom);
  return this.http.get<Api[]>(`${this.apiUrl}/filtrerApi`,{params});
}

//afficher liste des Apis
  getListeApis():Observable<Api[]> {
    return this.http.get<Api[]>(`${this.apiUrl}/consulterApis`);
  }

  // rechercher Api
  searchApi(keyword: string): Observable<Api[]> {
    return this.http.get<Api[]>(`${this.apiUrl}/SearchApi?keyword=${keyword}`);
  }
// delete Api
  supprimerApi(idApi: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimerApi/${idApi}`);
  }



// get Api by id
  getById(idApi: number): Observable<Api> {
    const url = `${this.apiUrl}/${idApi}`;
    return this.http.get<Api>(url);
  }

  // modifier Api
  updateApi(api: Api, idApi: number): Observable<void> {
    const url = `${this.apiUrl}/modifierApi/${idApi}`;
    return this.http.put<void>(url, api);
  }

}
