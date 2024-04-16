import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DemandeApi } from '../Classes/demandeApi';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private demandeUrl = 'http://localhost:9092/demande';
  constructor(private http: HttpClient) { }

  //  add new Demande
addDemande(demande : DemandeApi): Observable<any> {
  return this.http.post<any>(`${this.demandeUrl}/ajouterDemApi`, demande)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
  console.error('Une erreur s\'est produite:', error);
  return throwError('Une erreur s\'est produite. Veuillez réessayer.');
  }

//afficher liste des Demandes
  getListeDemandes():Observable<DemandeApi[]> {
    return this.http.get<DemandeApi[]>(`${this.demandeUrl}/consulterDemandesApis`);
  }

  // rechercher Demande
  searchDemande(keyword: string): Observable<DemandeApi[]> {
    return this.http.get<DemandeApi[]>(`${this.demandeUrl}/rechercherDemande?keyword=${keyword}`);
  }
// delete Demande
  supprimerDemande(idDemande: number): Observable<void> {
    return this.http.delete<void>(`${this.demandeUrl}/supprimerDemApi/${idDemande}`);
  }

// get Demande by id
  getById(idDemande: number): Observable<DemandeApi> {
    const url = `${this.demandeUrl}/${idDemande}`;
    return this.http.get<DemandeApi>(url);
  }

// get demande by reference
getByReference(reference: string): Observable<DemandeApi> {
  const url = `${this.demandeUrl}/demande/${reference}`;
  return this.http.get<DemandeApi>(url);
}
// get demande by adress ip
getByAdresseIpApp(adresseipapp : string): Observable<DemandeApi> {
  const url = `${this.demandeUrl}/demandeApi/${adresseipapp}`;
  return this.http.get<DemandeApi>(url);
}
  // modifier Demande
  updateDemande(demande: DemandeApi, idDemande: number): Observable<void> {
    const url = `${this.demandeUrl}/modifierDemApi/${idDemande}`;
    return this.http.put<void>(url, demande);
  }

}
