import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  constructor(private UserService : UserService,private ActivatedRoute: ActivatedRoute, private Router:Router) {}
    ngOnInit() : void{
      const idUser:any=this.ActivatedRoute.snapshot.paramMap.get('idUser');
      this.getUser(idUser);
    }

    user:any={
      email:'',
      nom:'',
      prenom:'',
      cin:'',
      mobile:"",
      grade:'',
      fonction:"",
      cnrps:'',
      password:''
    }

    private getUser(idUser : number) : void{
      this.UserService.getById(idUser).subscribe(
        user => {
          this.user=user;
      })
    }
    supprimerUser(idUser : number) : void {
      if (idUser === undefined || idUser === null) {
          alert("idUser indéfini");
          return;
      }

      console.log("id user à supprimer : ", idUser);
      this.UserService.supprimerUser(idUser).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Succès!',
            text: 'L\'utilisateur a été supprimé avec succès.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.Router.navigate(['/listUser']);
            }
          });
        },
        error => {
          console.error('Échec de la suppression user :', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Échec de la suppression de l\'utilisateur. Veuillez réessayer.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
      );
    }

//modifier user
modifierUser(idUser : number) : void {
  this.Router.navigate(['/modifierUser' ,idUser]);
}


  }
