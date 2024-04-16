import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent {
constructor(private UserService : UserService,private ActivatedRoute: ActivatedRoute, private Router:Router) {}

auth:boolean=false;
data : any;
idUser: number;
  //Log out
  logOut(){
    localStorage.removeItem("role");
    window.location.reload();
    this.Router.navigate(['/connexion']);
  }
  
 changePhoto(){
  console.log("photo changé")
 }

  ngOnInit() : void{
    // get var role pour se deconnecter
    this.data = localStorage.getItem('role');
    console.log(this.data);
   if (this.data) {
    console.log(this.data);

    this.auth=true;

   }


    const idUser:any=this.ActivatedRoute.snapshot.paramMap.get('idUser');
    this.UserService.getById(idUser).subscribe(user => {
      this.user=user;
    });
  }

  user:any={
    idUser : '',
    email:'',
    nom:'',
    prenom:'',
    cin:'',
    mobile:"",
    grade:'',
    fonction:"",
    cnrps:'',
    password:''
  };

// modifier user
modifierUser(): void {
  // Récupérer l'ID de l'utilisateur à partir de la route
  const idUser: any = this.ActivatedRoute.snapshot.paramMap.get('idUser');

  // Appeler le service pour modifier l'utilisateur
  this.UserService.modifierUser(this.user, idUser).subscribe(
    () => {
      // Afficher une alerte de succès avec SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Succès !',
        color : 'Green' ,
        timer: 5000,
        text: 'L\'utilisateur a été modifié avec succès !',
        confirmButtonText: 'OK',
      }).then((result) => {
        // Rediriger vers la liste des utilisateurs si l'utilisateur appuie sur le bouton "OK"
        if (result.isConfirmed) {
          this.Router.navigate(['/listUser']);
        }
      });
    },
    (error) => {
      // Afficher une alerte d'erreur avec SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Oops !',
        color : 'red',
        text: 'Une erreur est survenue lors de la modification de user.\nVeuillez réessayer plus tard.',
        confirmButtonText: 'OK',
      });
      console.error('Erreur lors de la modification de l\'utilisateur : ', error);
    }
  );
}


retour() {
  // Rediriger vers la page d'accueil
  this.Router.navigate(['/accueil']);
}


}


