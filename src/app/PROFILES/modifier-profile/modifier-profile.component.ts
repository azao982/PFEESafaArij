import { ProfilService } from './../../Service/profil.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from './../../Classes/profile';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.component.html',
  styleUrls: ['./modifier-profile.component.css']
})
export class ModifierProfileComponent {
  constructor(private ProfilService : ProfilService, private fb : FormBuilder, private router: Router, private activatedRoute: ActivatedRoute   ){}

  ngOnInit(): void {
    const id : any = this.activatedRoute.snapshot.paramMap.get('id');
    this.ProfilService.getById(id).subscribe(profil => {
      this.profil= profil;
    });
  }
    profil : any = {
      //code : 0,
      nomProfil : '',
    };


modifierProfil() {
  // Afficher une boîte de dialogue de confirmation avec SweetAlert2
  Swal.fire({
    icon: 'question',
    title: 'Voulez-vous vraiment modifier ce profil ?',
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    // Vérifier si l'utilisateur a cliqué sur le bouton "Oui"
    if (result.isConfirmed) {
      console.log('Form Data:', this.profil);
      this.ProfilService.modifierProfil(this.profil, this.profil.id).subscribe(() => {
        // Alert success avec une icône
        Swal.fire({
          icon: 'success',
          title: 'Demande Modifiée!',
          text: 'Le profil a été modifié avec succès!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/listProfil']);
        });
      }, error => {
        // Alert erreur avec une icône
        Swal.fire({
          icon: 'error',
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de la modification de profil',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      });
    }
  });
}

}
