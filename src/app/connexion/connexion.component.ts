import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('0.5s ease-in-out', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('0.5s ease-in-out', style({ opacity: 0 }))]),

    ]),
  ],
})
export class ConnexionComponent implements OnInit {


// showForm = true;
// loginForm: FormGroup;
// errorMessage: string = '';

// constructor(  private fb: FormBuilder,private router: Router,  private authService: AuthService ) {}

 ngOnInit(): void {
//   this.initLoginForm();
 }

// initLoginForm(): void {
//   this.loginForm = this.fb.group({
//     email: ['', [Validators.required]],
//     password: ['', Validators.required],
//     role : ['',Validators.required]
//   });
// }

// getErrorMessage(fieldName: string): string {
//   const control = this.loginForm.get(fieldName);

//   if (control.hasError('required')) {
//     return 'Ce champ est obligatoire';
//   } else if (control.hasError('email')) {
//     return 'Adresse email invalide';
//   } else if (control.hasError('minlength')) {
//     return 'Le mot de passe doit contenir au moins 1 caractere majuscule 1 minscule 1 caract speciale 1 chiffre et de longueur minim 6 caractères';
//   }

//   return '';
// }

// /* emailDomainValidator(control: FormControl): { [key: string]: boolean } | null {
//   const email = control.value as string;

//   if (email && email.indexOf('@') !== -1) {
//     const [, domain] = email.split('@');
//     if (domain.indexOf('.') === -1) {
//       return { emailDomain: true }; // Validation failed
//     }
//   }

//   return null; // Validation passed
// }
// */


// onLogin(): void {
//   console.log(this.loginForm.value);
//   switch (this.loginForm.value.role) {
//     case 'admin':
//       this.authService.loginAdmin(this.loginForm.value).subscribe(
//         (data: any) => {
//           this.handleRoleNavigation(data.role);
//           localStorage.setItem('role', data.role);
//         },
//         (error) => {
//           console.error(error);
//           this.errorMessage = "Admin erroné";
//           alert(this.errorMessage);
//         }
//       );        break;
//       case 'encadrant':
//        this.router.navigate(['/listStageEnc']);
//        this.authService.login(this.loginForm.value).subscribe(
//         (data: any) => {
//           this.handleRoleNavigation(data.role);
//           localStorage.setItem('role', data.role);
//         },
//         (error) => {
//           console.error(error);
//           this.errorMessage = "Encadrant n est pas encore inscrit";
//           alert(this.errorMessage);
//         }
//       );
//        break;
//         case 'stagiaire':
//           this.router.navigate(['/listStageStagiaire']);
//         this.authService.login(this.loginForm.value).subscribe(
//           (data: any) => {
//             this.handleRoleNavigation(data.role);
//             localStorage.setItem('role', data.role);
//           },
//           (error) => {
//             console.error(error);
//             this.errorMessage = "Stagiaire n'est pas encore inscrit";
//             alert(this.errorMessage);
//           }
//         );
//         break;
//     default:
//       break;
//   }

// }


// private handleRoleNavigation(role: string): void {
//   switch (role) {
//     case 'admin':
//       this.router.navigate(['/listStageAdmin']);
//       break;
//       case 'encadrant':
//         this.router.navigate(['/listStageEnc']);
//         break;
//         case 'stagiaire':
//           this.router.navigate(['/listStageStagiaire']);
//           break;
//     default:
//       break;
//   }
// }

}
