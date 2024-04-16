import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/Classes/profile';
import { ProfilService } from 'src/app/Service/profil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']

})
export class ListProfilComponent implements OnInit{
  profil : Profile;
  profils : Profile [] =[];
  profilForm: FormGroup;
  selectedProfil: Profile | undefined;
  formulaire : boolean=false;
  constructor( private profilService: ProfilService, private fb : FormBuilder,private router: Router, private route : ActivatedRoute) {}
  ngOnInit(): void {
    this.profilForm = this.fb.group({
      id: [''],
      code: [''],
      nomProfil: [''],
    });
    this.getProfils();
  }

// get liste des profils
  private getProfils(): void{
    this.profilService.getListeProfils().subscribe(data => {
        this.profils=data;
    });
  }

  // modifier profil
modifierProfil(id : number) : void{
  this.router.navigate(['/modifierProfil',id]);
}
// supprimer profil
supprimerProfil(id: number):void{
    if (id === undefined || id === null) {
      console.error('ID profil  non défini');
      return;
    }
// Définir une classe CSS personnalisée pour agrandir la taille de la police
const swalCustomClass = {
  confirmButton: 'btn btn-success',
  cancelButton: 'btn btn-danger',
  popup: 'swal2-popup-custom',
  title: 'swal2-title-custom',
  htmlContainer: 'swal2-html-container-custom'
};

// Appeler SweetAlert2 avec la classe CSS personnalisée
Swal.fire({
  title: 'Êtes-vous sûr?',
  text: 'Vous ne pourrez pas récupérer cette demande !',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Oui, supprimer!',
  cancelButtonText: 'Annuler',
  customClass: swalCustomClass
}).then((result) => {
  if (result.isConfirmed) {
    this.profilService.supprimerProfil(id).subscribe(
      () => {
        Swal.fire('Succès', 'profile supprimé avec succès', 'success');
        this.getProfils();
      },
      error => {
        console.error('Échec suppression profile');
        Swal.fire('Erreur', 'Une erreur s\'est produite lors de la suppression du profil', 'error');
      }
    );
  }
});

  }

// detail profil
detailProfil(id : number) : void{
  this.router.navigate(['/detailProfil',id]);
}
}
