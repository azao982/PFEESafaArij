import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Service/user.service';
import { Profils } from 'src/app/profile';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  users : User[]=[];
  user : User;
  selectedProfile: Profils | undefined;
  selectedUser : User | undefined ;
  searchKeyword: string='';
  searchResults: User[] = [];
  userForm : FormGroup;
  formulaire : boolean=false;
  profileOptions: string[] = Object.values(Profils);

formData: any = {
    idUser:0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    mobile: '',
    cin: '',
    grade: '',
    cnrps: '',
    fonction: '',
    profile :''
  };

constructor(private userService : UserService, private fb: FormBuilder, private router : Router ,private route : ActivatedRoute){}
//selectedProfile: Profils = Profils.admin_delegue;

// get all users
ngOnInit(): void {
     //  this.selectedProfile=Profils.admin_delegue;
      this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8),
                      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%&:-_+#/*?£&])[A-Za-z\d@$!%:-_+#/*?£&]{8,}$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      cin: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      cnrps: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      grade: ['', [Validators.required]],
      fonction: ['', [Validators.required]],
      profile : ['', Validators.required]

    });
    this.profileOptions = Object.values(Profils);
    this.getUser();
}
userColors: string[] = ['#FADBD8', '#D6EAF8', '#D5DBDB', '#FCF3CF', '#D1F2EB', '#FDEDEC'];
userIconColors: string[] = ['#9b59b6', '#3498db', '#34495e', '#2ecc71', '#e67e22', '#f1c40f'];
userContainerColors: string[] = ['#F5B7B1', '#AED6F1', '#ABB2B9', '#F9E79F', '#A9DFBF', '#FAD7A0'];


// get liste des users
private getUser():void{
  this.userService.getListeUsers().subscribe(data => {
    this.users=data;
  })
}

//modifier user
modifierUser(idUser : number) : void {
  this.router.navigate(['/modifierUser' ,idUser]);
}
//consulter detail user
detailUser(idUser : number) : void {
  this.router.navigate(['/detailUser' ,idUser]);
}
//supprimer user
supprimerUser(idUser: number): void {
  if (idUser === undefined || idUser === null) {
    console.error('ID utilisateur non défini');
    return;
  }

  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas récupérer cet utilisateur!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.supprimerUser(idUser).subscribe(
        () => {
          Swal.fire('Succès', 'Utilisateur supprimé avec succès', 'success');
          this.getUser();
        },
        error => {
          console.error('Échec suppression utilisateur');
          Swal.fire('Erreur', 'Une erreur s\'est produite lors de la suppression de l\'utilisateur', 'error');
        }
      );
    }
  });
}

// ajouter user
onAjouter() {
  console.log(this.profileOptions);
  console.log(this.userForm.value);
  if (this.userForm.valid) {
    this.formData = this.userForm.value; // Obtenir les valeurs du formulaire
    this.formData.profile = this.userForm.get('profile').value;
console.log(this.formData.profile)
    this.userService.addUser(this.formData).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Succès !',
          color : "green",
          text: 'Utilisateur ajouté avec succès',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listUser']);
          }
        });
      },
      error => {
        console.error('Erreur lors de l ajout de User',  error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          color : "red",
          text: 'Une erreur s\'est produite lors de l\'ajout de l\'utilisateur. Veuillez réessayer.',
          confirmButtonText: 'OK',
        });
      }
    );
  }
}

// rechercher user
RechercherUser(): void {
  if (!this.searchKeyword) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Veuillez entrer un utilisateur à rechercher !',
    });
    return;
  }

  this.userService.searchUser(this.searchKeyword).subscribe(
    (result: User[]) => {
      console.log(result);
      this.searchResults = result;
      if (result.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Information',
          color : 'blue' ,
          text: 'Aucun utilisateur trouvé.',
        });
      }
    },
    (error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur s\'est produite lors de la recherche de l\'utilisateur.',
      });
    }
  );
}
// filtrer user
filtrerUser(): void {
  if (this.selectedProfile) {
    this.userService.filtrerUser(this.selectedProfile).subscribe(
      (result: User[]) => {
        console.log('Résultats filtrés :', result);
        this.users = result; // Modifier ici
      },
      error => {
        console.error('Erreur lors du filtrage :', error);
      }
    );
  } else {
    console.error('Profil non défini.');
  }
}
}

