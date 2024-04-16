import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {
  constructor(private router: Router) { }
  canActivate(): boolean {
    // Vérifie si l'utilisateur est authentifié et a le rôle requis
    const userProfil = localStorage.getItem('profil');
    if (userProfil && userProfil === 'admin') {
      return true;
    } else {
      // Redirige vers une page d'authentification si l'utilisateur n'a pas le rôle requis
      this.router.navigate(['/connexion']);
      return false;
    }
  }
}
