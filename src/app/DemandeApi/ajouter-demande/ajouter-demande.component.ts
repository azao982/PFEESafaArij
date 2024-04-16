import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/Service/demande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-demande',
  templateUrl: './ajouter-demande.component.html',
  styleUrls: ['./ajouter-demande.component.css']
})
export class AjouterDemandeComponent {
  demandeForm:FormGroup;
  formulaire : Boolean = false;
  constructor(private demandeService:DemandeService, private fb:FormBuilder, private router:Router) { }
  onAjouter() {
    if (this.demandeForm.valid) {
         this.demandeService.addDemande(this.demandeForm.value).subscribe(
        data => {
          console.log(data);
          alert("added successfully");
          this.router.navigate(['/listDemande']);
          this.formulaire = true;
        },
        error => {
          console.error('Erreur lors de l ajout de la demande:',error);
        }
      );
    } else {
      alert("Formulaire non valide");
    }
    console.log(this.demandeForm.value);
  }

  ngOnInit(): void {
    this.demandeForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(8)]],
      reference: ['', Validators.required],
      hebergeurapp : ['', Validators.required],
      publie: ['',Validators.required],
      nomapp: ['', Validators.required],
      nomdomaineapp:['', Validators.required],
      adresseipapp: ['', [Validators.required, this.ipAddressValidator]],
      typeconnexion: ['' , Validators.required],
      nombreappelan: ['', Validators.required],
      nombreappelmin: ['', Validators.required],
      invomasse: ['', Validators.required],
      payshebergeur: ['',Validators.required],
      dateinvmasse: ['',Validators.required],
    //  Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.dateValidator()]],
      raisoninmasse: ['', Validators.required],
      datecreation: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.dateValidator()]],
      //,this.dateValidatorModif()],
      datemodification : ['',[Validators.required]],
      //  Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.dateValidator(),this.dateValidatorModif()]]
    });
  }


  // Fonction de validation de date de creation doit etre superierue à la date actuelle
   dateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const enteredDate = new Date(control.value);
      const currentDate = new Date();

      if (enteredDate <=  currentDate) {
        // La date est antérieure à la date actuelle
        return { 'invalidDate': true };
      }

      return null; // La date est valide
    };
  }


  /*
// ctr de validation sur la date il faut que date de modification soit sup a la date de creation
  dateValidatorModif(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const modificationDate = new Date(control.value);
      const creationDate = new Date();

      if (modificationDate < creationDate) {
        // La date est érieure à la date actuelle
        return { 'date creation < date modification': true };
      }

      return null; // La date est valide
    };
  }
*/

  // fct de validation d adress IP
  ipAddressValidator(control: FormControl): { [key: string]: any } | null {
    const ipAddressPattern: RegExp =
 /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    if (control.value && !ipAddressPattern.test(control.value)) {
    // this.showValidationErrorMsg('Adresse IP invalide. Veuillez entrer une adresse IP valide.');
      return { 'invalidIpAddress': true };
    }
    return null;
  }

  // popup msg erreur de validation @ IP

// showValidationErrorMsg(message: string): void {
//   Swal.fire({
//     icon: 'error',
//     title: 'OOPS § Erreur',
//     text: message,
//     color: 'red',
//     confirmButtonText: 'OK'
//   });
}


