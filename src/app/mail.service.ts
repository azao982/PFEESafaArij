import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailUrl = 'http://localhost:9095/mails';
  constructor(private http: HttpClient) { }
  addMail(mail : Email): Observable<any> {
    return this.http.post<any>(`${this.mailUrl}/sendEmail`, mail)
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Une erreur s\'est produite:', error);
    return throwError('Une erreur s\'est produite. Veuillez réessayer.');
  }
  getListemails():Observable<Email[]> {
    return this.http.get<Email[]>(`${this.mailUrl}/consulterMails`);
  }
}
