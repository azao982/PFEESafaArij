import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Classes/user';
import { UserService } from 'src/app/Service/user.service';
import { Profils } from 'src/app/profile';

@Component({
  selector: 'app-dashboard-consumer',
  templateUrl: './dashboard-consumer.component.html',
  styleUrls: ['./dashboard-consumer.component.css']
})
export class DashboardConsumerComponent implements OnInit{
  users : User[]=[];
  user : User;
  selectedUser : User | undefined ;
  searchKeyword: string='';
  searchResults: User[] = [];
  userForm : FormGroup;

  formulaire : boolean=false;

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

selectedProfile: Profils = Profils.adminDeleguee;

// get all users
ngOnInit(): void {
      // this.selectedProfile=Profils.adminDeleguee;
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

    });
    this.getConsommateur();
}


// get liste des users
private getConsommateur():void{
  this.userService.getListeConsommateurs().subscribe(data => {
    this.users=data;
  })
}
//detail user
detailUser(idUser : number) : void {
  this.router.navigate(['/detailUser' ,idUser]);

}

listDemandeEnCours(){
  this.router.navigate(['/demandeEnCours']);
}

listDemandeRefuses(){
  this.router.navigate(['/demandeRefusee']);

}

listDemandeArectifier(){
  this.router.navigate(['/demandeARectifier']);

}

listDemandeTermines(){
  this.router.navigate(['/demandeTerminees']);
}

//modifier user
modifierUser(idUser : number) : void {
  this.router.navigate(['/modifierProfil' ,idUser]);
}

}
