import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Structure } from '../Classes/structure';

@Injectable({
  providedIn: 'root'
})
export class StructureService{
private structureUrl = 'http://localhost:9095/structures';
  constructor(private http: HttpClient) { }

  //  ajouter nouvelle structure
addStructure(str : Structure): Observable<any> {
  return this.http.post<any>(`${this.structureUrl}/ajouterStructure`, str)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
  console.error('Une erreur s\'est produite:', error);
  return throwError('Une erreur s\'est produite. Veuillez réessayer.');
  }

//afficher liste des structures
  getListeStructures():Observable<Structure[]> {
    return this.http.get<Structure[]>(`${this.structureUrl}/consulterStructures`);
  }

  // rechercher structure
  searchStructure(keyword: string): Observable<Structure[]> {
    return this.http.get<Structure[]>(`${this.structureUrl}/rechercherStructure?keyword=${keyword}`);
  }
// delete structure
  supprimerStructure(id: number): Observable<void> {
    return this.http.delete<void>(`${this.structureUrl}/supprimerStructure/${id}`);
  }

// get structure  by id
  getById(id: number): Observable<Structure> {
    const url = `${this.structureUrl}/${id}`;
    return this.http.get<Structure>(url);
  }
  // modifier structure
  updateStructure(str : Structure, id: number): Observable<void> {
    const url = `${this.structureUrl}/modifierStructure/${id}`;
    return this.http.put<void>(url, str);
  }

  // filtrer structure
  filtrerStructure(type: string): Observable<Structure[]> {
    const params = new HttpParams().set('type', type); // Correction ici
    return this.http.get<Structure[]>(`${this.structureUrl}/filtrerStructure`, { params });
  }


}
