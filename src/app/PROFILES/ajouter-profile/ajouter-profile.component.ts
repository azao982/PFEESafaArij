import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/Service/profil.service';

@Component({
  selector: 'app-ajouter-profile',
  templateUrl: './ajouter-profile.component.html',
  styleUrls: ['./ajouter-profile.component.css']
})
export class AjouterProfileComponent {
  profilForm:FormGroup;
  formulaire : Boolean = false;
  constructor(private profilService:ProfilService, private fb:FormBuilder, private router:Router) { }
  onAjouter() {
    if (this.profilForm.valid) {
         this.profilService.addProfile(this.profilForm.value).subscribe(
        data => {
          console.log(data);
          alert("profil added successfully");
          this.router.navigate(['/listProfil']);
          this.formulaire = true;
        },
        error => {
          console.error('Erreur lors de l ajout profil :',error);
        }
      );
    } else {
      alert("Formulaire non valide");
    }
    console.log(this.profilForm.value);
  }

  ngOnInit(): void {
    this.profilForm = this.fb.group({
      code: ['', [Validators.required]],
    //  nomProfil: ['', Validators.required],

    });
  }


}
