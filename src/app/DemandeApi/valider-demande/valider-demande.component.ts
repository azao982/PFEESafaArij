import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DemandeService } from '../../Service/demande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/status';
import { Email } from 'src/app/email';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/mail.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-valider-demande',
  templateUrl: './valider-demande.component.html',
  styleUrls: ['./valider-demande.component.css']
})
export class ValiderDemandeComponent {
  mails : Email[]=[];
  mail : Email;
  selectedEmail : Email | undefined ;
  searchKeyword: string='';
  searchResults: Email[] = [];
  mailForm : FormGroup;
  formulaire : boolean=false;
formData: any = {
    id:0,
    toEmail: '',
    subject: '',
    body: '',
  };
// constucteur pour
constructor(private demandeService: DemandeService,private emailService : MailService, private fb: FormBuilder, private activatedRoute: ActivatedRoute,private router:Router) {}
statusOptions : string []= [];

ngOnInit(): void {
  this.mailForm = this.fb.group({
    toEmail: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });
  this.getmail();
}
userColors: string[] = ['#FADBD8', '#D6EAF8', '#D5DBDB', '#FCF3CF', '#D1F2EB', '#FDEDEC'];
userIconColors: string[] = ['#9b59b6', '#3498db', '#34495e', '#2ecc71', '#e67e22', '#f1c40f'];
userContainerColors: string[] = ['#F5B7B1', '#AED6F1', '#ABB2B9', '#F9E79F', '#A9DFBF', '#FAD7A0'];
private getmail():void{
this.emailService.getListemails().subscribe(data => {
  this.mails=data;
})
  const idDemande : any = this.activatedRoute.snapshot.paramMap.get('idDemande');
  this.demandeService.getById(idDemande).subscribe(demande => {
    this.statusOptions = Object.values(Status).filter(status =>
      status === Status.à_rectifier || status === Status.enCoursConsommateur || status === Status.en_cours_1ere_validation
    );

    this.demande = demande;

    this.demande.datecreation = new Date(demande.datecreation).toISOString().split('T')[0];
    // date systeme prend la date systeme par défaut
    this.demande.datemodification = new Date().toISOString().split('T')[0];

    this.demande.dateinvmasse = new Date(demande.dateinvmasse).toISOString().split('T')[0];
  });
  
}

//appel de la classe demande
demande: any = {
  description:"",
  reference: "",
  hebergeurapp :"",
  publie:"",
  nomapp: "",
  nomdomaineapp:"",
  adresseipapp: "",
  typeconnexion: "",
  nombreappelan: "",
  nombreappelmin: "",
  invomasse: "",
  payshebergeur:"",
  dateinvmasse: "",
  raisoninmMasse: "",
  datecreation: "",
  datemodification :"",
  statut:Status.enCoursConsommateur,
  commentaire: ''
};
modifierDemande() {
  // Afficher une boîte de dialogue de confirmation avec SweetAlert2
  Swal.fire({
    icon: 'question',
    title: 'Voulez-vous vraiment confirmer la validation de cette demande ?',
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    // Vérifier si l'utilisateur a cliqué sur le bouton "Oui"
    if (result.isConfirmed) {
      console.log('Form Data:', this.demande);
      this.demandeService.updateDemande(this.demande, this.demande.idDemande).subscribe(() => {
        // Alert success avec une icône
        Swal.fire({

          icon: 'success',
          title: 'Demande Validée 1er Niveau!',
          text: 'La Demande Validée avec succès!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/DashboardValid1']);
        });
      }, error => {
        // Alert erreur avec une icône
        Swal.fire({
          icon: 'error',
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de la modification de la Demande.',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      });
    }
  });
}
rectifierDemande() {
  Swal.fire({
    icon: 'question',
    title: 'Voulez-vous vraiment marquer cette demande pour rectification ?',
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      console.log('Form Data:', this.demande);
      this.demandeService.updateDemande(this.demande, this.demande.idDemande).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Demande à rectifier!',
          text: 'La demande a été marquée pour rectification avec succès!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK',
          showCancelButton: true,
          cancelButtonText: 'Envoyer Mail',
          cancelButtonColor: '#007bff'
        }).then((result) => {
          if (result.isDismissed) {
            // Show the modal for sending email
            const modalElement = document.getElementById('user-form-modal');
            if (modalElement) {
              const modal = new bootstrap.Modal(modalElement);
              modal.show();
            }
          } else {
            this.router.navigate(['/DashboardValid1']);
          }
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de la modification de la demande.',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      });
    }
  });
}
onAjouter() {
  console.log(this.mailForm.value);
  if (this.mailForm.valid) {
    this.formData = this.mailForm.value; // Obtenir les valeurs du formulaire
    this.emailService.addMail(this.formData).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Succès !',
          color : "green",
          text: 'Email ajouté avec succès',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listmail']);
          }
        });
      },
      error => {
        console.error('Erreur lors de l ajout d"un mail',  error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          color : "red",
          text: 'Une erreur s\'est produite lors de l\'ajout de l\"email. Veuillez réessayer.',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}

}