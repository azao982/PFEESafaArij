import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeApi } from 'src/app/Classes/demandeApi';
import { DemandeService } from 'src/app/Service/demande.service';
import { Status } from 'src/app/status';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demande-refusee',
  templateUrl: './demande-refusee.component.html',
  styleUrls: ['./demande-refusee.component.css']
})
export class DemandeRefuseeComponent implements OnInit {
  colors: string[] = [
    '#FF4D4D', // rouge clair
    '#FF1A1A', // rouge clair
    '#FFE6E6', // rouge très clair
    '#FFD1D1', // rouge clair
    '#FFC4C4', // rouge clair
    '#FFA8A8', // rouge clair
    '#FF7F7F', // rouge clair
    '#FF4F4F', // rouge clair
    '#FF3333', // rouge clair
    '#FF6666', // rouge plus clair
    '#FFB3B3', // rouge clair
    '#FF9999', // rouge clair
    '#FFCCCC', // rouge très clair
    '#FF6666', // rouge plus clair
  ];
  
avatars: string[] = [
  'https://bootdey.com/img/Content/avatar/avatar7.png',

  'https://bootdey.com/img/Content/avatar/avatar2.png',
  'https://bootdey.com/img/Content/avatar/avatar3.png',
  'https://bootdey.com/img/Content/avatar/avatar6.png',

  'https://bootdey.com/img/Content/avatar/avatar4.png',
  'https://bootdey.com/img/Content/avatar/avatar5.png',
  'https://bootdey.com/img/Content/avatar/avatar8.png',
  'https://bootdey.com/img/Content/avatar/avatar1.png',


  // Ajoutez autant d'URLs d'avatar que nécessaire
];

  demandes: DemandeApi[] = [];
  searchKeyword: string = '';
  searchResults: DemandeApi[] = [];
  Demande:DemandeApi;
  selectedDemande:  DemandeApi | undefined;
  demandeForm : FormGroup;
  formulaire : boolean=false;

  formData: any = {
    idDemande:0,
    reference: '',
    description: '',
    nomapp: '',
    hebergeurapp: '',
    publie: false,
    nomdomaineapp: '',
    adresseipapp: '',
    typeconnexion: '',
    nombreappelan: 0,
    nombreappelmin : 0,
    invomasse : true ,
    payshebergeur : '',
    datecreation : new Date(),
    datemodification : new Date(),
    dateinvmasse : new Date(),
    raisoninmasse : '',
    statut:''

  };

  constructor(private demandesService: DemandeService, private fb : FormBuilder,private router: Router, private route : ActivatedRoute) {}
  ngOnInit(): void {
    this.demandeForm = this.fb.group({
      reference: [''],
      description: [''],
      nomapp: [''],
      hebergeurapp: [''],
      publie: [''],
      nomdomaineapp: [''],
      adresseipapp: [''],
      typeconnexion: [''],
      nombreappelan: [''],
      nombreappelmin : [''],
      invomasse : [''],
      payshebergeur : [''],
      datecreation : [''],
      datemodification : [''],
      dateinvmasse : [''],
      raisoninmasse :[''],
      statut:['']
    });
    this.getDemandes();
  }


// get liste des demandes
  private getDemandes(): void{
    this.demandesService.getListeDemandesRef().subscribe(data => {
        this.demandes=data;
    });
  }

  // supprimer demande
  supprimerDemande(idDemande: number): void {
    if (idDemande === undefined || idDemande === null) {
      console.error('ID Demande non défini');
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
    this.demandesService.supprimerDemande(idDemande).subscribe(
      () => {
        Swal.fire('Succès', 'demande supprimée avec succès', 'success');
        this.getDemandes();
      },
      error => {
        console.error('Échec suppression demande');
        Swal.fire('Erreur', 'Une erreur s\'est produite lors de la suppression de la demande', 'error');
      }
    );
  }
});

  }

// ajouter demande
onAjouter() {
  console.log(this.demandeForm.value);
  if (this.demandeForm.valid) {
    this.formData = this.demandeForm.value;
    this.demandesService.addDemande(this.formData).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Succès !',
          color : "green",
          text: 'Demande ajoutée avec succès',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listDemande']);
          }
        });
      },
      error => {
        console.error('Erreur lors de l ajout de demande',  error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          color : "red",
          text: 'Une erreur s\'est produite lors de l\'ajout de demande. Veuillez réessayer.',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}
// palette de couleurs
getColor(index: number): string {
  return this.colors[index % this.colors.length];
}


// diriger vers page modifier
validerDemande(idDemande:number){
  this.router.navigate(['/validerDemande',idDemande]);
  }
  // rechercher demande
  searchDemande(): void {
    if (!this.searchKeyword) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        color : 'red',
        text: 'Veuillez entrer une demande à rechercher !',
      });
      return;
    }

    this.demandesService.searchDemande(this.searchKeyword).subscribe(
      (result: DemandeApi[]) => {
        console.log(result);
        this.searchResults = result;
        if (result.length === 0) {
          Swal.fire({
            icon: 'info',
            title: 'Information',
            color : 'blue' ,
            text: 'Aucune demande trouvée.',
          });
        }
      },
      (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          color:'pink',
          text: 'Une erreur produite lors de la recherche de demande',
        });
      }
    );
  }


  filtrerDemande(nomapp : string){

    this.demandesService.filtrerDemande(nomapp).subscribe(
      (result: DemandeApi[]) => {
        console.log('Résultats filtrés :', result);
        this.demandes=result;
        console.log(result);

      },
      error => {
        console.error('Erreur lors du filtrage :', error);
        this.showErrorMessage("erreur lors du filtrage");
      }
    );
}
  showErrorMessage(arg0: string) {
    throw new Error('Method not implemented.');
  }
//consulter detail demande
  DetailDemande(idDemande: number): void {
    this.router.navigate(['/detailDemande' ,idDemande]);
  }
}
