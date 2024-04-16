import { Profile } from './../Classes/profile';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
private profilUrl = 'http://localhost:9092/profils';

constructor(private http: HttpClient) { }

//  add new Profile
addProfile(profile : Profile): Observable<any> {
return this.http.post<any>(`${this.profilUrl}/ajouterProfile`, profile)
  .pipe(
    catchError(this.handleError)
  );
}
private handleError(error: HttpErrorResponse): Observable<never> {
console.error('Une erreur s\'est produite:', error);
return throwError('Une erreur s\'est produite. Veuillez réessayer.');
}

//afficher liste des profils
getListeProfils():Observable<Profile[]> {
  return this.http.get<Profile[]>(`${this.profilUrl}/consulterProfils`);
}
// rechercher profil
 searchProfil(keyword: string): Observable<Profile[]> {
  return this.http.get<Profile[]>(`${this.profilUrl}/rechercherProfil?keyword=${keyword}`);
}
// delete profil
supprimerProfil(id: number): Observable<void> {
  return this.http.delete<void>(`${this.profilUrl}/supprimerProfil/${id}`);
}

// get profil by id
getById(id: number): Observable<Profile> {
  const url = `${this.profilUrl}/${id}`;
  return this.http.get<Profile>(url);
}

// get profil by code
getByCode(code : number): Observable<Profile> {
const url = `${this.profilUrl}/profil/${code}`;
return this.http.get<Profile>(url);
}
// modifier profile
modifierProfil(profile: Profile, id: number): Observable<void> {
  const url = `${this.profilUrl}/modifierProfil/${id}`;
  return this.http.put<void>(url, profile).pipe(
    catchError((error :  any)=> {
      console.log(error);
  throw error;
 })
  );
}

}
